import React from 'react';

import { GetStaticProps, NextPage } from 'next';

import { BasisSeo } from '../components/Seo';
import Hero from '../components/Hero';
import { getAllPostData, PostHeader } from '../shared/Content';
import Grid from '../components/Card';

interface Props {
  posts: PostHeader[];
}

const Home: NextPage<Props> = ({ posts }) => {
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postData = await getAllPostData();
  return {
    props: {
      posts: postData,
    },
  };
};

export default Home;
