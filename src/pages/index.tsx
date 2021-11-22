import React from 'react';

import { GetStaticProps } from 'next';

import { BasisSeo } from '../components/Seo';
import Hero from '../components/Hero';
import { getAllPostData } from '../shared/Content';
import Grid from '../components/Card';
import { generateRss } from '@/scripts/generate-rss';

type HomeProps = {
  posts: Frontmatter[];
};

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <BasisSeo
        title="Blog"
        description="A Blog about Magento and JavaScript Development"
      />
      <div>
        <Hero />
        <Grid posts={posts} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = await getAllPostData();
  const postData = allPostData.frontmatter;

  generateRss({ postData });

  return {
    props: {
      posts: postData,
    },
  };
};

export default Home;
