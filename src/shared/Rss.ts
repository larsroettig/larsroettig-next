import { PostRss } from '../shared/Content';

const generateRssItem = (post: PostRss): string => `
  <item>
    <guid>https://larsroettig.dev/${post.slug}</guid>
    <title>${post.title}</title>
    <link>https://larsroettig.dev/${post.slug}</link>
    <description>${post.description}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`;

const getLastBuildDate = (posts: PostRss[]): string =>
  new Date(posts[0].modifiedAt).toUTCString();

const generateRss = (posts: PostRss[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog - Lars Roettig</title>
      <link>https://larsroettig.dev/</link>
      <description>A blog about Software and Magento Development</description>
      <language>en</language>
      <lastBuildDate>${getLastBuildDate(posts)}</lastBuildDate>
      <atom:link href="https://larsroettig.dev/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join(``)}
    </channel>
  </rss>
`;

export default generateRss;
