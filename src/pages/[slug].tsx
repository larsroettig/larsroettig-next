import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';
import { NextSeo } from 'next-seo';
import { parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { getPostBySlug, getPostSlugs } from '@/shared/Posts';
import { PostHeader } from '@/shared/Post';
import Callout from '@/components/Mdx/Callout';
import Image from '@/components/Mdx/Image';
import Breadcrumb from '@/components/Mdx/Breadcrumb';

interface Props {
  slug: string;
  content: string;
  frontMatter: PostHeader;
}

const PostPage: NextPage<Props> = ({ slug, content, frontMatter }) => {
  const { title, description, date, hero, modifiedAt } = frontMatter;
  const datePublished = parseISO(date);
  const dateModified = modifiedAt
    ? parseISO(modifiedAt).toISOString()
    : undefined;
  const url = `https://larsroettig.dev/${slug}`;

  const mdxContent = hydrate(content, {
    components: {
      Callout,
      Image,
      Breadcrumb,
    },
  });

  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-8">
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          type: `article`,
          article: {
            publishedTime: datePublished.toISOString(),
            modifiedTime: dateModified,
          },
        }}
      />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/6">
          <article className="prose lg:prose-xl max-w-full">
            {hero ? <Image src={hero} alt={`Teaser for ${title}`} /> : ``}
            <h1 className="text-center">{title}</h1>
            {mdxContent}
          </article>
        </div>
        <div className="w-full lg:w-2/6">
          <h1>Sidebar</h1>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postSlugs = getPostSlugs();

  return {
    paths: postSlugs.map((postSlug) => ({ params: { slug: postSlug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params.slug as string;

  const { mdxContent, frontMatter } = await getPostBySlug(slug);

  return {
    props: {
      slug,
      content: mdxContent,
      frontMatter,
    },
  };
};

export default PostPage;
