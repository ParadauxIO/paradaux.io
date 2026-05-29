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
# nginxinc/nginx-unprivileged: listens on 8080 and runs as uid 101 by default,
# so the pod can run with readOnlyRootFilesystem + non-root securityContext.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
