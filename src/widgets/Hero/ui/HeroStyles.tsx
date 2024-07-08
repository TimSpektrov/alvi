import { cva } from 'class-variance-authority';

export const cvaWrapper = cva([
  'HeroSlider-cvaRoot',
  'top-1/2 -translate-y-1/2 absolute',
]);

export const cvaHero = cva(['Hero-cva', 'h-screen relative']);
export const cvaHeroSliderWrapper = cva([
  'HeroSlider-cvaRoot',
  'absolute top-1/2 -translate-y-1/2',
  'hover-swiper-navigation',
]);

export const cvaSliderHoverPrev = cva([
  'HeroSlider-cvaHoverPrev',
  // 'absolute top-0 left-0 bottom-0 w-1/2',
]);

export const cvaSliderHoverNext = cva([
  'HeroSlider-cvaHoverNext',
  // 'absolute top-0 right-0 bottom-0 w-1/2 z-10',
]);

export const cvaRoot = cva([
  'HeroSlider-cvaRoot',
  '[&>.swiper-wrapper]:items-center',
]);

export const cvaPreloader = cva([
  'HeroSlider-cvaPreloader',
  'overflow-hidden',
  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
  'w-[254px] h-[304px]',
  'z-10',
]);

export const cvaPreloaderImageWrapper = cva([
  'HeroSlider-cvaPreloaderImageWrapper',
  'absolute w-full h-full',
]);

export const cvaPreloaderImage = cva([
  'HeroSlider-cvaPreloaderImage',
  'relative',
  'w-full h-full',
]);

export const cvaSlide = cva([
  'HeroSlider-cvaSlide',
  'flex',
  'justify-center',
  'items-center',
  '!max-h-[30.4rem] max-w-[40rem] !w-auto',
  'relative',
]);

export const cvaImageWrapper = cva(['HeroSlider-cvaImageWrapper', 'relative']);

export const cvaImage = cva([
  'HeroSlider-cvaImage',
  '!relative',
  '!w-auto',
  '!h-auto',
]);

export const cvaHeroFooter = cva([
  'HeroFooter-cva',
  'absolute bottom-0 inset-x-0',
  'flex justify-between items-end',
  'px-1.6 py-2.4 sm:p-3.2',
  'text-cPrimary40',
]);

export const cvaHeroFooterText = cva(['HeroFooter-cvaText', 'text-center']);
export const cvaHeroFooterTextTitle = cva([
  'HeroFooter-cvaTextTitle',
  'uppercase text-cPrimary40',
  'font-medium text-1.4 tracking-tighter',
]);
export const cvaHeroFooterTextDescription = cva([
  'HeroFooter-cvaTextTitle',
  'uppercase text-cPrimary100',
  'font-medium text-1.4 tracking-tighter',
]);

export const cvaHeroFooterButtonContainer = cva([
  'HeroFooter-cvaButtonGroup',
  'flex justify-center items-center gap-1',
]);
export const cvaHeroButton = cva(
  [
    'HeroFooter-cvaButton',
    'w-3.4 h-3.4',
    'flex justify-center items-center',
    'border border-cPrimary40 rounded-full',
    '[&>*]:h-1.5',
  ],
  {
    variants: {
      reverse: {
        true: ['[&>*]:scale-flip'],
      },
    },
  }
);
