import React from 'react';

const LarsLogo: React.FC = () => (
  <span className="flex items-center">
    <img
      className="float-left"
      src="larsroettig-logo.svg"
      alt="Logo from larsroettig.dev"
      height="32"
      width="32"
    />
    <span className="font-mono text-xl md:text-2xl font-extrabold tracking-tight hidden sm:inline">
      Lars Roettig
    </span>
  </span>
);

export default LarsLogo;
