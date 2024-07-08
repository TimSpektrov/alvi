import { cva } from 'class-variance-authority';

export const cvaRoot = cva([
  'Preloader-cvaRoot',
  'fixed h-full w-full',
  'flex flex-col items-center justify-center',
]);

export const cvaCircle = cva([
  'Preloader-cvaCircle',
  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'w-[111.9rem]',
]);

export const cvaPreloaderContainer = cva(['fixed inset-0']);
export const cvaProgressWrapper = cva([
  'Preloader-cvaProgress',
  'absolute top-2.8 left-1/2 -translate-x-1/2',
  'h-1.7 overflow-hidden',
  'text-secondary text-cTextDisabled',
]);
export const cvaAnimatedText = cva([
  'Preloader-cvaAnimatedText',
  'text-preloader font-sb',
]);

export const cvaBottom = cva([
  'Preloader-cvaBottom',
  'absolute bottom-2.8 left-1/2 -translate-x-1/2',
  'flex flex-col items-center',
]);

export const cvaBottomText1 = cva([
  'Preloader-cvaBottomText1',
  'text-secondary text-cTextDisabled uppercase mb-0.4',
]);

export const cvaBottomText2 = cva([
  'Preloader-cvaBottomText2',
  'text-secondary text-cTextPrimary uppercase',
]);

export const cvaLine = cva([
  'Preloader-cvaLine',
  'absolute bottom-9.9 left-1/2 -translate-x-1/2',
  'w-0.1 opacity-[0.12] bg-cBorderSecondary',
  'rotate-180',
]);
