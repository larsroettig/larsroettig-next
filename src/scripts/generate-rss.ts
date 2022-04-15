import { Feed } from 'feed';

import config from '../config.json';

const path = require(`path`);
const fs = require(`fs`);

const getPath = (...pathSegment: string[]): string => {
  return path.resolve(process.cwd(), ...pathSegment);
};

const exportFile = (filePath: string, content: string): void => {
  const folder = path.dirname(filePath);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
  fs.writeFileSync(filePath, content);
};

type GenerateRssProps = {
  postData: {
    description: string;
    slug: string;
    title: string;
    published: boolean;
    hero: string;
    placeHolder: string;
    modifiedAt?: string;
  }[];
};

export const generateRss = async ({
  postData,
}: GenerateRssProps): Promise<void> => {
  const feed = new Feed({
    title: `LarsRoettig.dev`,
    description: `A blog about Software and Magento Development`,
    id: `${config.baseUrl}`,
    link: `${config.baseUrl}`,
    language: `en`,
    copyright: ``,
    feedLinks: {
      atom: `${config.baseUrl}/atom.xml`,
    },
  });

  console.log();

  postData.forEach((postData: Frontmatter) => {
    feed.addItem({
      title: postData.title as string,
      id: `${config.baseUrl}/${postData.slug}`,
      link: `${config.baseUrl}/${postData.slug}`,
      description: postData.description,
      date: new Date(postData.date as string),
    });
  });

  feed.addCategory(`Technology`);

  exportFile(getPath(`public`, `rss.xml`), feed.rss2());
  exportFile(getPath(`public`, `atom.xml`), feed.atom1());
};
