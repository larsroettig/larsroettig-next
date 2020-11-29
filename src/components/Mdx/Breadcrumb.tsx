import React, { useEffect, useState } from 'react';

interface BreadcrumbProps {
  elements: string[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  elements,
  className = ``,
}) => {
  const [elementList, setEelementList] = useState([]);
  const [lastEelement, setLastElement] = useState(``);

  useEffect(() => {
    setLastElement(elements.pop());
    setEelementList(elements);
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
        <b>{lastEelement}</b>
      </span>
    </div>
  );
};

export default Breadcrumb;
