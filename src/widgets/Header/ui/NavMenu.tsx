import { FC } from 'react';
// import {Burger} from "./";
import { cva } from 'class-variance-authority';
import { INavItem, NavItem } from '@/widgets/Header/ui/NavItem';

interface INavMenu {
  navList: INavItem[];
  color?: 'light' | 'dark';
}
export const NavMenu: FC<INavMenu> = ({ navList, color }) => {
  const cvaNav = cva(['nav-cva']);
  const cvaList = cva(['nav-cvaList', 'flex flex-col items-end']);

  return (
    <>
      {/*<Burger />*/}
      {navList.length > 0 && (
        <nav className={cvaNav()} style={{ color: color }}>
          <ul className={cvaList()}>
            {navList.map(({ name, slug }) => (
              <NavItem name={name} slug={slug} key={slug} />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};
