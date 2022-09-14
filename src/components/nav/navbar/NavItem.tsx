import React from 'react';
import Link from 'next/link';

type NavbarItem = {
  name: string;
  link: string;
};

type Props = {
  cssClass: string;
  navItem: NavbarItem;
};

function NavItem({ cssClass, navItem }: Props) {
  const { link, name } = navItem;
  return (
    <li className={cssClass}>
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </li>
  );
}

export default NavItem;
