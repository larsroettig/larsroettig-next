import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';
import { NextSeo } from 'next-seo';
import { parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { getPostBySlug, getPostSlugs, PostHeader } from '@/shared/Content';
import {
  Breadcrumb,
  Image,
  Callout,
  CodePre,
  CodePrism,
} from '@/components/Mdx';

import Supporter from '@/components/Supporter';
import EditOnGithub from '@/components/EditOnGithub';
import Share from '@/components/Share';
import config from '../config.json';

interface Props {
  slug: string;
  content: string;
  frontMatter: PostHeader;
  readingTime: string;
}

const components = {
  components: {
    Callout,
    Image,
    Breadcrumb,
    pre: (props: any) => {
      return <CodePre {...props} />;
    },
    code: CodePrism,
  },
};

const PostPage: NextPage<Props> = ({
  slug,
  content,
  frontMatter,
  readingTime,
}) => {
  const { title, description, date, hero, modifiedAt } = frontMatter;
  const datePublished = parseISO(date);
  const dateModified = modifiedAt
    ? parseISO(modifiedAt).toISOString()
    : undefined;
  const url = `${config.baseUrl}${slug}`;

  const mdxContent = hydrate(content, components);

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
        <div className="w-full lg:w-5/6">
          <div className="prose lg:prose-xl max-w-full mb-10 ">
            {hero ? <Image src={hero} alt={`Teaser for ${title}`} /> : ``}
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
        <div className="w-full lg:w-1/6">
          <Share url={url} title={title} />
          <Supporter />
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
};

export default PostPage;
