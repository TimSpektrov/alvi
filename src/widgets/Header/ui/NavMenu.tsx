import { FC } from 'react';
import { Burger } from './';
import { NavItem } from '@/widgets/Header/ui/NavItem';
import { cvaNav, cvaNavList } from './HeaderStyles';
import route from '@/shared/config/routes';

interface INavMenu {
  color?: 'light' | 'dark';
}
export const NavMenu: FC<INavMenu> = ({ color }) => {
  const navList = [
    {
      name: 'о компании',
      slug: route.about,
    },
    {
      name: 'Доставка',
      slug: route.delivery,
    },
    {
      name: 'Партнерам',
      slug: route.partners,
    },
    {
      name: 'Контакты',
      slug: route.contacts,
    },
  ];
  return (
    <>
      <Burger />
      {navList.length > 0 && (
        <nav className={cvaNav()} style={{ color: color }}>
          <ul className={cvaNavList()}>
            {navList.map(({ name, slug }) => (
              <NavItem name={name} slug={slug} key={slug} />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};
