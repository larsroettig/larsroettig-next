import React from 'react';
import CodeBlock from './Prism';

export interface CodeProps {
  codeString: string;
  noLineNumbers?: boolean;
  metastring?: string;
  className?: string;
  [key: string]: any;
}

interface preToCodeBlockProps {
  children: {
    props?: {
      mdxType?: string;
      className?: string;
      children?: string;
    };
  };
}

const CodePre: React.FC<any> = (props: preToCodeBlockProps) => {
  const codeBlock = (): CodeProps | null => {
    if (
      !props.children ||
      !props.children.props ||
      props.children.props.mdxType !== `code`
    ) {
      return null;
    }

    const {
      children: codeString,
      className = ``,
      ...properties
    } = props.children.props;

    if (!codeString) {
      return null;
    }

    const matches = className.match(/language-(?<lang>.*)/);

    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ``,
      ...properties,
    };
  };
  const codeData = codeBlock();
  if (codeData !== null) {
    return <CodeBlock {...codeData} />;
  }
  return <pre {...props} />;
};

export default CodePre;
