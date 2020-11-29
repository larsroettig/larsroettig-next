import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Container from './Container';
import SocialLink from './SocialLink';

const Footer: React.FC = () => (
  <footer className="px-4 text-gray-100 bg-gray-800 text-xl">
    <Container>
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full md:w-1/2 lg:w-1/2 py-5 text-center md:text-left">
          <a href="/imprint">Imprint</a>
          <a href="/privacy-statement" className="px-4">
            Privacy Statement
          </a>
        </div>
        <div className="w-full md:w-1/2 py-5 flex justify-center md:justify-end">
          <div className="px-5">
            <SocialLink url="https://twitter.com/LarsRoettig">
              <FaTwitter />
            </SocialLink>
          </div>

          <div className="px-5">
            <SocialLink url="https://www.facebook.com/larsroettig.dev/">
              <FaFacebookF />
            </SocialLink>
          </div>

          <div className="px-5">
            <SocialLink url="https://github.com/larsroettig">
              <FaGithub />
            </SocialLink>
          </div>

          <div className="px-5">
            <SocialLink url="https://www.linkedin.com/in/larsroettig/">
              <FaLinkedin />
            </SocialLink>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
