import { getPageBySlug } from '@/shared/Content';
import { GetStaticProps } from 'next';
import Page from '@/shared/Page';

export const getStaticProps: GetStaticProps<any> = async () => {
  const { mdxContent, frontMatter } = await getPageBySlug(`privacy-statement`);

  return {
    props: {
      content: mdxContent,
      frontMatter,
    },
  };
};

export default Page;
