import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { FaBars, FaGithub, FaRss } from 'react-icons/fa';
import Link from 'next/link';
import ExternalLink from '@bradgarropy/next-link';
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuLink,
  MenuPopover,
  useMenuButtonContext,
} from '@reach/menu-button';

import LarsLogo from '../Brand';
import NavItem from './NavItem';

const LINKS = [
  {
    to: `/about`,
    name: `About me`,
  },
];

const MOBILE_LINKS = [{ name: `Home`, to: `/` }, ...LINKS];

type LinkProps = {
  href: string;
  onClick: React.MouseEventHandler;
};

const MobileNavLink: FunctionComponent<LinkProps> = ({
  href,
  onClick,
  children,
}) => (
  <Link href={href}>
    <a href={href} onClick={onClick}>
      <span className=" block px-5 py-2 list-none w-full text-center border-b-2">
        {children}
      </span>
    </a>
  </Link>
);

function MobileMenuList() {
  const [open, setOpen] = useState(false);
  const { isExpanded } = useMenuButtonContext();

  const menuCallback = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    setOpen(isExpanded);
    if (isExpanded) {
      document.body.classList.add(`overflow-y-scroll`);
      // alternatively, get bounding box of the menu, and set body height to that.
      document.body.style.height = `100vh`;
    } else {
      document.body.classList.remove(`overflow-y-scroll`);
      document.body.style.removeProperty(`height`);
    }
  }, [isExpanded, open]);

  return open ? (
    <MenuPopover
      position={(r) => ({
        top: `calc(${Number(r?.top) + Number(r?.height)}px + 1.25rem)`, // 2.25 rem = py-9 from navbar
        left: 0,
        bottom: 0,
        right: 0,
      })}
      style={{ display: `block` }}
      className="z-50"
    >
      <div className="bg-[#0e0e12] flex flex-col pb-12 h-full border-t border-gray-600 overflow-y-scroll text-white">
        <MenuItems className="p-0 bg-transparent border-none ">
          {MOBILE_LINKS.map((link) => (
            <MenuLink
              as={MobileNavLink}
              href={link.to}
              key={link.name}
              onClick={menuCallback}
            >
              {link.name}
            </MenuLink>
          ))}
        </MenuItems>
      </div>
    </MenuPopover>
  ) : null;
}

const MobileHeader: React.FC = () => {
  return (
    <Menu>
      <MenuButton className="focus:border-primary hover:border-primary border-secondary text-primary inline-flex items-center justify-center p-2 border-2 rounded-full focus:outline-none transition">
        <FaBars size={20} />
      </MenuButton>

      <MobileMenuList />
    </Menu>
  );
};

const Header: React.FC = () => {
  const Items = LINKS.map((item) => {
    return (
      <li key={item.to}>
        <NavItem href={item.to} title={item.name} />
      </li>
    );
  });

  return (
    <nav className="bg-[#0e0e12]">
      <div className="container mx-auto p-2 relative flex items-center justify-between  font-semibold text-sm leading-6 text-gray-200">
        <ExternalLink to="/" data-cy="logo">
          <LarsLogo />
        </ExternalLink>
        <div className="flex items-center">
          <div className="md:hidden">
            <MobileHeader />
          </div>
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-8">{Items}</ul>
          </nav>
          <div className="flex items-center border-l border-gray-200 ml-6 pl-6 dark:border-gray-800">
            <label className="sr-only">Theme</label>
            <ExternalLink to="/rss.xml" className=" p-1 ">
              <span className="sr-only">Open Rss Feed</span>
              <FaRss size={20} />
            </ExternalLink>
            <a
              href="https://github.com/larsroettig"
              className="ml-6  text-gray-400 hover:text-white hidden sm:block"
            >
              <span className="sr-only">Lars Roettig on GitHub</span>
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
