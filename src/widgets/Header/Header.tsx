import { FC } from 'react';
import route from '@/shared/config/routes';
import { LinkCollection, NavMenu, Logo } from './ui';
import { cva } from 'class-variance-authority';
import { usePreloaderStore } from '@/shared/store/preloaderStore';

interface IHeader {
  // theme: {
  logo: 'light' | 'dark';
  link: 'light' | 'dark';
  nav: 'light' | 'dark';
  // };
}
const Header: FC<IHeader> = ({ logo, nav, link }) => {
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

  const { isComplete } = usePreloaderStore();
  const style = {
    opacity: isComplete ? 1 : 0,
    transform: `translateY(${isComplete ? 0 : '20px'})`,
    transition: 'opacity .5s 1s, transform .5s 1s',
  };

  const cvaHeader = cva([
    'header-cva',
    'fixed inset-x-0 top-0 z-10',
    'flex justify-between',
    'px-1.6 py-2.4 sm:p-3.2',
  ]);
  return (
    <header className={cvaHeader()} style={style}>
      <Logo color={logo} />
      <LinkCollection color={link} />
      <NavMenu navList={navList} color={nav} />
    </header>
  );
};

export default Header;
