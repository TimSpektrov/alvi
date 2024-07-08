import { FC } from 'react';
import Link from 'next/link';
import {
  cvaNavItemLink,
  cvaNavItemName,
} from '@/widgets/Header/ui/HeaderStyles';

export interface INavItem {
  name: string;
  slug: string;
}
export const NavItem: FC<INavItem> = ({ name, slug }) => {
  return (
    <Link href={slug} className={cvaNavItemLink()}>
      <div className={cvaNavItemName()}>{name}</div>
      <div className={cvaNavItemName()}>{name}</div>
    </Link>
  );
};
