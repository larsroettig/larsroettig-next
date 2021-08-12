import React from 'react';
import Image from 'next/image';
import logo from './larsroettig-logo.svg';

const LarsLogo: React.FC = () => (
  <span className="flex items-center">
    <Image src={logo} alt="Logo from larsroettig.dev" height="32" width="32" />
    <span className="font-mono text-xl md:text-2xl font-extrabold tracking-tight hidden lg:inline text-white">
      Lars Roettig
    </span>
  </span>
);

export default LarsLogo;
