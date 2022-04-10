import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';

import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';

import { getPostBySlug, getPostSlugs, PostHeader } from '../shared/Content';
import {
  Breadcrumb,
  Image,
  Callout,
} from '../components/Mdx';

import EditOnGithub from '../components/EditOnGithub';
import { BlogSeo } from '../components/Seo';
import { MdxRemote } from 'next-mdx-remote/types';

import config from '../config.json';

interface Props {
  slug: string;
  content: MdxRemote.Source;
  frontMatter: PostHeader;
  readingTime: string;
}

const components = {
  components: {
    Callout,
    Image,
    Breadcrumb
  },
};

const PostPage: NextPage<Props> = ({
  slug,
  content,
  frontMatter,
  readingTime,
}) => {
  const { title, description, date, hero, modifiedAt } = frontMatter;
  const url = `${config.baseUrl}/${slug}`;

  const mdxContent = hydrate(content, components);

  const getSchemaImage = (): string => {
    if (!hero) {
      return `https://larsroettig.dev/banner.jpg`;
    }

    return `https://larsroettig.dev/images/${hero}`;
  };

  return (
    <>
      <BlogSeo
        title={title}
        description={description}
        url={url}
        publishedAt={date}
        image={getSchemaImage()}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="prose lg:prose-xl max-w-full mb-10 ">
              <div className="flex justify-center">
                {hero ? <Image src={hero} alt={`Teaser for ${title}`} /> : ``}
              </div>
              <h1 className="text-center">{title}</h1>
              <p className="text-center font-mono text-base">
                <time>{modifiedAt}</time>
                <span className="inline-flex text-sm px-2"> — </span>
                {readingTime && <span>{readingTime}</span>}
              </p>
              <EditOnGithub slug={slug} />
              <div>{mdxContent}</div>
              <EditOnGithub slug={slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postSlugs = getPostSlugs();

  return {
    paths: postSlugs.map((postSlug) => ({ params: { slug: postSlug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (params?.slug) {
    const slug = params.slug as string;

    const { mdxContent, frontMatter, readingTime } = await getPostBySlug(
      slug,
      components,
    );

    return {
      props: {
        slug,
        content: mdxContent,
        frontMatter,
        readingTime,
      },
    };
  }
};

export default PostPage;
