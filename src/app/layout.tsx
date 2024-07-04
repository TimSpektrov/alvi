import { RemResizeScript } from '@/features/rem-resize';
import SmoothScroll from '@/shared/ui/SmoothScroll/SmoothScroll';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Шрифты
const SangBleu = localFont({
  src: [
    {
      path: '../../public/fonts/SangBleuEmpire-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--sb-font',
});

const NeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--base-font',
});

export const metadata: Metadata = {
  title: 'Next.js Project',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <head>
        <RemResizeScript
          defaultFontSize={10}
          startScaleWidth={1440}
          endScaleTopWidth={1920}
          endScaleBottomWidth={1024}
        />
      </head>
      <body className={clsx(SangBleu.variable, NeueMontreal.variable)}>
        <SmoothScroll>
          <div id="app">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
