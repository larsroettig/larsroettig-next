import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';

export const CONTENT_PATH = 'src/content';
export const POSTS_PATH = path.join(CONTENT_PATH, 'posts');

export function getAllPostSlugs() {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));

  return postPaths.map((postPath) => postPath.replace('.mdx', ''));
}

/**
 * Get all posts + frontmatter - for blog listing page
 */
export function getAllPostData() {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));

  const postData = postPaths.map((postPath) => {
    const fileContents = fs
      .readFileSync(path.resolve(POSTS_PATH, postPath))
      .toString();

    const { data: frontMatter, excerpt } = matter(fileContents, {
      //@ts-ignore - gray-matter typings are all screwy here
      excerpt: (file: any) => {
        const CHAR_LIMIT = 300;

        file.excerpt = file.content.substring(0, CHAR_LIMIT) + '...';
      },
    });

    const slug = postPath.replace('.mdx', '');

    return {
      slug,
      excerpt,
      frontMatter,
    };
  });

  return postData;
}

/**
 * Process frontmatter + mdx content for the given post by slug
 */
export function renderMdxForPostSlug(slug: string) {
  const postPath = path.resolve(POSTS_PATH, `${slug}/index.mdx`);
  return renderMdxForFile(postPath);
}

/*
 * Private helper for rendering MDX content from a given `filePath`
 */
async function renderMdxForFile(filePath: string) {
  const fileContents = fs.readFileSync(filePath).toString();
  const { content, data } = matter(fileContents);

  const mdxContent = await renderToString(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [require('remark-slug')]
    },
  });

  return { mdxContent, frontMatter: data };
}
