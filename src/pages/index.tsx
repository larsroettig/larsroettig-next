import React from 'react';

import { BasisSeo } from '../components/Seo';
import Hero from '../components/Hero';

import Grid from '../components/Card';
import { generateRss } from '@/scripts/generate-rss';
import { allBlogs } from 'contentlayer/generated';
import { pick } from '@/utils';

const Home = ({ posts }) => {
  return (
    <>
      <BasisSeo
        title="Blog"
        description="A Blog about Magento and JavaScript Development"
      />
      <div className="isolate">
        <Hero />
        <Grid posts={posts} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = allBlogs
    .map((post) =>
      pick(post, [
        `slug`,
        `title`,
        `description`,
        `published`,
        `hero`,
        `placeHolder`,
        `modifiedAt`,
      ]),
    )
    .sort(
      (a, b) => Number(new Date(b.modifiedAt)) - Number(new Date(a.modifiedAt)),
    );

  generateRss({ postData: posts });

  return { props: { posts } };
}
export default Home;
