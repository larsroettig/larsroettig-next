import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="container mx-auto px-2">{children}</div>
);

export default Container;
