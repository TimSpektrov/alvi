'use client';
import Header from '@/widgets/Header/Header';
import HeroSlider from '@/widgets/HeroSlider/ui/HeroSlider';
import Preloader from '@/widgets/Preloader/ui/Preloader';
import { useEffect, useState } from 'react';

const images = [
  '/images/hero_6.jpg',
  '/images/hero_1.jpg',
  '/images/hero_2.jpg',
  '/images/hero_3.jpg',
  '/images/hero_4.jpg',
  '/images/hero_5.jpg',
  '/images/hero_6.jpg',
  '/images/hero_1.jpg',
];

export default function Home() {
  const [logo, setLogo] = useState<'dark' | 'light'>('dark');
  const [link, setLink] = useState<'dark' | 'light'>('dark');
  const [nav, setNav] = useState<'dark' | 'light'>('dark');
  const scrollPos = 50;
  useEffect(() => {
    setLogo('light');
    setLink('light');
    setNav('light');
  }, [scrollPos]);

  return (
    <>
      <Header logo={logo} link={link} nav={nav} />
      <main>
        <Preloader />

        <HeroSlider images={images} />
      </main>
    </>
  );
}
