/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';

type NavItemProps = {
  href: string;
  title: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, title }) => (
  <Link href={href}>
    <a className="hover:bg-gray-900 text-white px-3 py-2 rounded-md font-medium">
      {title}
    </a>
  </Link>
);

export default NavItem;
