import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps, NextPage } from 'next';

import Hero from '../components/Hero';
import { getAllPostData, PostHeader } from '../shared/Content';
import Grid from '../components/Card';

interface Props {
  posts: PostHeader[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <div>
        <Hero />
        <Grid posts={posts} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postData = getAllPostData();

  return {
    props: {
      posts: postData,
    },
  };
};

export default Home;
