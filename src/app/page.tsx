'use client';
import Header from '@/widgets/Header/Header';
import { Hero } from '@/widgets/Hero/Hero';
import Preloader from '@/widgets/Preloader/ui/Preloader';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Preloader />
        <Hero />
      </main>
    </>
  );
}
