import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';

import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { getPlaiceholder } from 'plaiceholder';
import fs from "fs";
import path from 'path';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  placeHolder: {
    type: 'string',
    resolve: async (doc) => {
      const { base64 } = await getPlaiceholder(`/images/${doc.hero}`);
      return base64;
    },
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

const Pages = defineDocumentType(() => ({
  name: 'Pages',
  filePathPattern: 'pages/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug:{ type: 'string', required: true },
    description: { type: 'string', required: false },
  },
}));

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'posts/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: true },
    published: { type: 'boolean', required: false, default: true },
    hero: { type: 'string', required: true },
    modifiedAt: { type: 'string', required: false },
  },
  computedFields,
}));

const rehypeOptions = {
  theme: JSON.parse(
      fs.readFileSync(path.resolve('assets/moonlight-ii.json'), 'utf-8')
  ),
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('line--highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
};


const contentLayerConfig = makeSource({
  contentDirPath: `content`,
  documentTypes: [Pages, Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypeOptions],
      [
        rehypeAutolinkHeadings,
        {
          content: {
            type: `element`,
            tagName: `span`,
            properties: {
              className: [`absolute`],
              style: {
                marginLeft: `-1.7rem`,
                marginTop: `0.5rem`,
                color: `#2b6cb0`,
              },
            },
            children: [
              {
                type: `element`,
                tagName: `svg`,
                properties: {
                  xmlns: `http://www.w3.org/2000/svg`,
                  viewbox: `0 0 24 24`,
                  className: `h-6 w-6`,
                  stroke: `currentColor`,
                  fill: `none`,
                  height: `24px`,
                  with: `24px`,
                },
                children: [
                  {
                    type: `element`,
                    tagName: `path`,
                    properties: {
                      'stroke-linecap': `round`,
                      'stroke-linejoin': `round`,
                      'stroke-width': `2`,
                      d: `M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1`,
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
