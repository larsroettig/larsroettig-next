import React from 'react';
import { Breadcrumb, Image, Callout } from '../components/Mdx';

import EditOnGithub from '../components/EditOnGithub';
import BlogPostFooter from '../components/BlogPost/BlogPostFooter';
import { BlogSeo } from '../components/Seo';

import config from '../config.json';

import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({ post }: { post: Blog }) {
  const { title, description, date, hero, modifiedAt, readingTime, slug } =
    post;
  const url = `${config.baseUrl}/${slug}`;

  const Component = useMDXComponent(post.body.code);

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
                {readingTime && <span>{readingTime.text}</span>}
              </p>
              <EditOnGithub slug={slug} />
              <Component
                components={
                  {
                    Breadcrumb,
                    Image,
                    Callout,
                  } as any
                }
              />
              <BlogPostFooter slug={slug} title={title} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const post = allBlogs.find((post) => post.slug === params.slug);

  return { props: { post } };
}
