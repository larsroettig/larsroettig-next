export interface PostPath {
  slug: string;
}

export interface PostHeader {
  title?: string;
  published?: boolean;
  date?: string;
  modifiedAt?: string;
  description?: string;
  author?: string;
  hero?: string;
}

export interface PostRss extends PostPath {
  title?: string;
  date?: string;
  modifiedAt?: string;
  description?: string;
}

export interface Post extends PostPath {
  mdxContent: string;
  frontMatter: PostHeader;
}
