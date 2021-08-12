import React, { useState } from 'react';
import { FaBars, FaRss } from 'react-icons/fa';
import Link from '@bradgarropy/next-link';

import LarsLogo from '../Brand';
import NavItem from './NavItem';

const NavItems = [
  {
    href: `/about`,
    title: `About me`,
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenue = (): void => {
    setIsOpen(!isOpen);
  };

  const Items = NavItems.map((item) => {
    return <NavItem key={item.href} href={item.href} title={item.title} />;
  });

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={() => handleOpenMenue()}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" data-cy="logo">
                <LarsLogo />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">{Items}</div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/rss.xml"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open Rss.xml</span>
              <FaRss />
            </Link>
          </div>
        </div>
      </div>

      <div className={`${isOpen === true ? `block` : `hidden`} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">{Items}</div>
      </div>
    </nav>
  );
};

export default Header;
