import React from 'react';

const LarsLogo: React.FC = () => (
  <div className="flex items-center">
    <a href="/" aria-label="back to homepage">
      <img
        className="float-left"
        src="larsroettig.svg"
        alt="Logo from larsroettig.dev"
        height="32"
        width="32"
      />
      <span className="font-mono text-xl md:text-2xl font-extrabold tracking-tight hidden sm:inline">
        Lars Roettig
      </span>
    </a>
  </div>
);

export default LarsLogo;
