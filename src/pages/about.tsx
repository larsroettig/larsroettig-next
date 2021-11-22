import { getPageBySlug } from '../shared/Content';
import { GetStaticProps } from 'next';
import Page from '../rootComponents/Page';

export const getStaticProps: GetStaticProps<any> = async () => {
  const slug = `about`;
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
