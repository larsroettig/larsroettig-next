import React from 'react';
import { FaBars, FaRss } from 'react-icons/fa';
import Container from './Container';
import LarsLogo from './Brand';

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-800 relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg h-14">
      <Container>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className=" w-auto static block justify-start">
            <div className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
              <LarsLogo />
            </div>
          </div>
          <div className=" flex-grow items-center flex">
            <ul className="flex flex-row list-none ml-auto">
              <li className="nav-item">
                <a
                  href="/rss.xml"
                  aria-label="RSS feed"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <FaRss size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
