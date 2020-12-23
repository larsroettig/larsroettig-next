import React from 'react';

const logo = require(`./larsroettig.svg`);

const LarsLogo: React.FC = () => (
  <div className="flex items-center">
    <a href="/" aria-label="back to homepage">
      <img src={logo} alt="Logo from larsroettig.dev" />
    </a>
  </div>
);

export default LarsLogo;
