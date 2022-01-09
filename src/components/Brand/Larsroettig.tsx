import React from 'react';
import Image from 'next/image';
import logo from './larsroettig-logo.svg';

const LarsLogo: React.FC = () => (
  <span className="flex items-center flex-wrap justify-center justify-items-center">
    <span className="m-5 hidden md:block">
      <Image
        src={logo}
        alt="Logo from larsroettig.dev"
        height="32"
        width="32"
      />
    </span>
    <span className="pl-1 font-mono text-lg md:text-4xl font-extrabold tracking-tight text-center lg:inline text-white ">
      Lars Roettig
    </span>
  </span>
);

export default LarsLogo;
