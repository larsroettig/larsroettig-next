import { GetStaticProps } from 'next';
import Page from '../rootComponents/Page';
import { allPages } from 'contentlayer/generated';

export const getStaticProps: GetStaticProps<any> = async () => {
  const slug = `privacy-statement`;
  const post = allPages.find((post) => post.slug === slug);

  return {
    props: {
      slug,
      content: post,
    },
  };
};

export default Page;
