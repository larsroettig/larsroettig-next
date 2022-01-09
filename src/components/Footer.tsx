import React from 'react';
import { FaGithub, FaLinkedin, FaRss, FaTwitter } from 'react-icons/fa';
import Link from '@bradgarropy/next-link';

import Container from './Container';
import LarsLogo from './Brand';

const Footer: React.FC = () => (
  <footer className="bg-[#0e0e12] text-gray-300 px-6 lg:px-8 py-12 content-auto">
    <Container>
      <div className="grid grid-cols-8   divide-gray-700 divide-y-2 lg:divide-x-2 lg:divide-y-0 lg:-mx-8">
        <div className="col-span-8  lg:col-span-3 lg:px-8 py-4 lg:py-0">
          <LarsLogo />
        </div>
        <div className="col-span-8  lg:col-span-2 lg:px-8 py-4 lg:py-0 text-center">
          <p className="text-xl font-semibold text-white">Legal</p>
          <nav className="mt-4">
            <ul className="grid lg:grid-cols-2">
              <li className="mb-2">
                <Link
                  to="/imprint"
                  className="font-normal text-base text-white hover:text-gray-100"
                >
                  Imprint
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/privacy-statement"
                  className="font-normal text-base text-white hover:text-gray-100"
                >
                  Privacy Statement
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-8  lg:col-span-3 lg:px-8 py-4 lg:py-0 text-center">
          <p className="text-xl font-semibold text-white">Follow me</p>
          <div className=" py-5 flex justify-center">
            <div className="px-2">
              <Link to="/rss.xml" aria-label="Open Rss">
                <FaRss size={20} />
              </Link>
            </div>
            <div className="px-5">
              <Link
                to="https://twitter.com/LarsRoettig"
                aria-label="Follow me on twitter"
              >
                <FaTwitter size={20} />
              </Link>
            </div>

            <div className="px-2">
              <Link
                to="https://github.com/larsroettig"
                aria-label="Follow me on Github"
              >
                <FaGithub size={20} />
              </Link>
            </div>

            <div className="px-2">
              <Link
                to="https://www.linkedin.com/in/larsroettig/"
                aria-label="Follow me on Linkedin"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
