import React from 'react';

import Container from './Container';
import LarsLogo from './Brand';

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <Container>
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center" data-cy="logo">
              <LarsLogo color="#fff" />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
