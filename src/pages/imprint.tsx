import { getPageBySlug } from '@/shared/Content';
import { GetStaticProps } from 'next';
import Page from '@/shared/Page';

export const getStaticProps: GetStaticProps<any> = async () => {
  const slug = `imprint`;
  const { mdxContent, frontMatter } = await getPageBySlug(slug);

  return {
    props: {
      slug,
      content: mdxContent,
      frontMatter,
    },
  };
};

export default Page;
