import { FC } from 'react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';

export interface INavItem {
  name: string;
  slug: string;
}
export const NavItem: FC<INavItem> = ({ name, slug }) => {
  const cvaList = cva([
    'nav-cvaList',
    'overflow-hidden',
    'h-1.7',
    'hover-parent-translate-y',
  ]);
  const cvaName = cva([
    'nav-cvaName',
    'uppercase text-lg',
    'hover-child-translate-y',
  ]);
  return (
    <Link href={slug} className={cvaList()}>
      <div className={cvaName()}>{name}</div>
      <div className={cvaName()}>{name}</div>
    </Link>
  );
};
