import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Rían Errity | Paradaux.io',
    description: 'Various tutorials, comments and ramblings about certain things.',
    site: context.site,
    items: posts.map(post => (
      {
        title: post.data.title,
        pubDate: post.data.firstPublished,
        description: post.data.summary,
        link: `/posts/${post.slug}/`,
      }
    )),
  });
}