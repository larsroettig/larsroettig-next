import React, { useEffect, useState } from 'react';

interface BreadcrumbProps {
  elements: string[];
  className?: string;
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { elements, className = `` } = props;

  const [elementList, setElementList] = useState([``]);
  const [lastElement, setLastElement] = useState(``);

  useEffect(() => {
    if (elements && elements.length >= 1) {
      setLastElement(elements.pop() || ``);
      setElementList(elements);
    }
  }, [elements]);

  return (
    <div className={className}>
      {elementList.map((item) => (
        <React.Fragment key={item.toLowerCase()}>
          <span>{item}</span>
          <span className="mx-2">/</span>
        </React.Fragment>
      ))}
      <span>
        <b>{lastElement}</b>
      </span>
    </div>
  );
};

export default Breadcrumb;
