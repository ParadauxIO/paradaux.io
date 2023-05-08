import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Rían Errity | Paradaux.io',
    description: 'Blog posts, articles and tutorials written by Rían Errity on the topics of Software Development, Linguistics and Startups.',
    site: 'https://paradaux.io',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}