import { FC, useEffect, useState } from 'react';
import { LinkCollection, NavMenu, Logo } from './ui';
import { usePreloaderStore } from '@/shared/store/preloaderStore';
import { cvaHeader } from './ui/HeaderStyles';

interface IHeader {
  // theme: {
  // logo: 'light' | 'dark';
  // link: 'light' | 'dark';
  // nav: 'light' | 'dark';
  // };
}
const Header: FC<IHeader> = () => {
  const [logo, setLogo] = useState<'dark' | 'light'>('dark');
  const [link, setLink] = useState<'dark' | 'light'>('dark');
  const [nav, setNav] = useState<'dark' | 'light'>('dark');
  const scrollPos = 50;
  useEffect(() => {
    setLogo('light');
    setLink('light');
    setNav('light');
  }, [scrollPos]);

  const { isComplete } = usePreloaderStore();

  return (
    <header className={cvaHeader({ isComplete })}>
      <Logo color={logo} />
      <LinkCollection color={link} />
      <NavMenu color={nav} />
    </header>
  );
};

export default Header;
