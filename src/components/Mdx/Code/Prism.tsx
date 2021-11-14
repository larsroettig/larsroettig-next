/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Prism from 'prism-react-renderer/prism';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import dynamic from 'next/dynamic';

const CopyToClipBoard = dynamic(() => import(`./CopyToClipBoard`));

if (globalThis.window) {
  (typeof global !== 'undefined' ? global : window).Prism = Prism;
  require('prismjs/components/prism-php');
}

export interface CodeProps {
  codeString?: string;
  noLineNumbers?: boolean;
  metastring?: string;
  blockClassName?: string;
  [key: string]: any;
}

interface getParameterReturn {
  language: Language;
  title?: string;
}

const getParameters = (className: string): getParameterReturn => {
  const [lang = ``, parameters = ``] = className.split(`:`);
  const [key, value] = parameters.split(`=`);
  let title = null;
  if (key === `title`) {
    title = value;
  }

  const language = lang.split(`language-`).pop().split(`{`).shift() as Language;
  return { language, title };
};

const RE = /{([\d,-]+)}/;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false;
  }
  const lineNumbers = RE.exec(meta)?.[1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => Number.parseInt(x, 10)));
  return (index: number) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
    );
    return inRange;
  };
};

const CodePrism: React.FC<CodeProps> = ({
  codeString,
  noLineNumbers = false,
  className: blockClassName,
  metastring = ``,
}) => {
  const { language, title } = getParameters(blockClassName);
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const hasLineNumbers = !noLineNumbers && true;

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {title && (
            <div className="code-title">
              <div>{title}</div>
            </div>
          )}
          <div className="code-highlight" data-language={language}>
            <pre
              className={className}
              style={style}
              data-linenumber={hasLineNumbers}
            >
              <CopyToClipBoard text={codeString} />
              {tokens.map((line, i) => {
                const lineProperties = getLineProps({ line, key: i });

                if (shouldHighlightLine(i)) {
                  lineProperties.className = `${lineProperties.className} highlight-line`;
                }

                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={`div--${i}`} {...lineProperties}>
                    {hasLineNumbers && (
                      <span className="line-number-style">{i + 1}</span>
                    )}
                    {line.map((token, key) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              })}
            </pre>
          </div>
        </>
      )}
    </Highlight>
  );
};

export default CodePrism;
