import React from 'react';

type CalloutProps = {
  type?: 'info' | 'warning' | 'danger';
  children?: React.ReactNode;
};

interface Map {
  [key: string]: string | undefined;
}

const Callout = (props: CalloutProps) => {
  const { type, children } = props;

  const variantStyles: Map = {
    info: `border-blue-600 bg-blue-100 `,
    warning: `border-yellow-600 bg-yellow-100 `,
    danger: `border-red-600 bg-red-100 `,
  };

  let addtionalClasses = variantStyles[`info`];
  if (type && variantStyles[type]) {
    addtionalClasses = variantStyles[type];
  }

  return (
    <div className={`p-2 my-2 break-words border-l-4 ${addtionalClasses}`}>
      {children}
    </div>
  );
};

export default Callout;
