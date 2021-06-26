import { Feed } from 'feed';
import { getAllPostData } from '../shared/Content';
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

const generated = async (): Promise<void> => {
  const feed = new Feed({
    title: `Feed Title`,
    description: `This is my personal feed!`,
    id: `${config.baseUrl}`,
    link: `${config.baseUrl}`,
    language: `en`,
    copyright: ``,
    feedLinks: {
      atom: `${config.baseUrl}/atom.xml`,
    },
  });

  const allPostData = await getAllPostData();
  allPostData.forEach((postData) => {
    feed.addItem({
      title: postData.title,
      id: `${config.baseUrl}/${postData.slug}`,
      link: `${config.baseUrl}/${postData.slug}`,
      description: postData.description,
      date: new Date(postData.date),
    });
  });

  feed.addCategory(`Technologie`);

  exportFile(getPath(`public`, `rss.xml`), feed.rss2());
  exportFile(getPath(`public`, `atom.xml`), feed.atom1());
};

generated();
