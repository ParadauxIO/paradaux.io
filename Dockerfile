# syntax=docker/dockerfile:1

# ── Stage 1: install dependencies ────────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ── Stage 2: build static site (Astro -> /app/dist) ──────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# PUBLIC_API_BASE_URL is baked into the static output by Vite at build time
# (consumed in src/utils/contact.js via import.meta.env). GHA sets it per
# branch — api.dev.paradaux.io on develop, api.paradaux.io on main.
ARG PUBLIC_API_BASE_URL
ENV PUBLIC_API_BASE_URL=$PUBLIC_API_BASE_URL
RUN npm run build

# ── Stage 3: nginx serving the static output ─────────────────────────────────
# Official nginx pinned to the nginx2root (CVE-2026-123007 et al.) fix release;
# nginxinc/nginx-unprivileged has no 1.30.7 build yet. The pod runs as uid 101
# (nginx) with readOnlyRootFilesystem, so move the pid file into the /tmp
# emptyDir (our server block already listens on 8080; temp paths live under
# the /var/cache/nginx emptyDir).
FROM nginx:1.30.7-alpine AS runner
RUN sed -i -E 's#^pid\s+.*;#pid /tmp/nginx.pid;#' /etc/nginx/nginx.conf \
    && grep -q '^pid /tmp/nginx.pid;' /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
