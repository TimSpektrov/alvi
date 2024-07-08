import { cva } from 'class-variance-authority';

export const cvaHeader = cva(
  [
    'header-cva',
    'fixed inset-x-0 top-0 z-10',
    'flex justify-between',
    'px-1.6 py-2.4 sm:p-3.2',
    'header-transition',
  ],
  {
    variants: {
      isComplete: {
        true: ['opacity-100 translate-y-0'],
        false: ['opacity-0 translate-y-4'],
      },
    },
    defaultVariants: {
      isComplete: false,
    },
  }
);

export const cvaLogoLink = cva(['Logo-cva', 'block h-auto'], {
  variants: {
    color: {
      light: ['light'],
      dark: ['dark'],
    },
  },
  defaultVariants: { color: 'dark' },
});

export const cvaLogoIcon = cva(['h-100 w-100']);

export const cvaBurger = cva(
  [
    'Header-cvaBurger',
    'w-1.6 relative block lg:hidden',
    'flex h-0.7 items-center duration-200',
    'w-3.4 h-3.4',
    'border border-cPrimary40 p-1 rounded-full',
  ],
  {
    variants: {
      isOpen: {
        true: 'rotate-45',
      },
    },
  }
);

export const cvaBurgerLine = cva(
  [
    'MenuButton-cvaBurgerLine',
    'absolute left-1/2 -translate-x-1/2 duration-200',
    'h-px w-1/2 bg-cPrimary100',
    'block lg:hidden',
  ],
  {
    variants: {
      position: {
        top: 'top-1.2',
        bottom: 'bottom-1.2',
      },
      isOpenTop: {
        true: '!-rotate-[135deg] !top-1/2',
      },
      isOpenBottom: {
        true: '!rotate-[135deg] !top-1/2',
      },
    },
  }
);

export const cvaCollectionLink = cva(
  [
    'Link-cva',
    'flex gap-1 flex-none items-center',
    'border border-cPrimary40 p-1',
  ],
  {
    variants: {
      color: {
        light: ['light'],
        dark: ['dark'],
      },
    },
    defaultVariants: { color: 'light' },
  }
);

export const cvaCollectionSpan = cva(['Link-cvaSpan', 'leading-4']);

export const cvaNav = cva(['nav-cva', 'hidden lg:block']);
export const cvaNavList = cva(['nav-cvaList', 'flex flex-col items-end']);

export const cvaNavItemLink = cva([
  'nav-cvaList',
  'overflow-hidden',
  'h-1.7',
  'hover-parent-translate-y',
]);

export const cvaNavItemName = cva([
  'nav-cvaName',
  'uppercase text-lg',
  'hover-child-translate-y',
]);
