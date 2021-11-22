type MdxPage = {
  slug: string;
  frontmatter: {
    title?: string;
    description?: string;
    modifiedAt?: string;
  };
};

type MdxPost = MdxPage & {
  code: string;
  editLink: string;
  frontmatter: {
    draft?: boolean;
    date?: string;
    hero?: string;
  };
};

declare var anyImport: any;

declare module '@stefanprobst/remark-shiki' {
  export = anyImport;
}

declare module 'remark-autolink-headings' {
  export = anyImport;
}

declare module 'remark-slug' {
  export = anyImport;
}

declare module 'prism-react-renderer/prism' {
  export = anyImport;
}

declare module 'react-obfuscate' {
  export = anyImport;
}

type Frontmatter = {
  title?: string;
  slug?: string;
  description?: string;
  modifiedAt?: string;
  placeHolder?: string;
  img?: string;
  date?: string;
};

type FrontmatterType = Frontmatter & Record<string, ?string>;
