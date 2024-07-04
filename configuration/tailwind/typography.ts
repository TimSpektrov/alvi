import { CustomThemeConfig } from 'tailwindcss/types/config';
export const typography: CustomThemeConfig['extend'] = {
  fontSize: {
    32: [
      '32rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.03em',
      },
    ],
    20: [
      '20rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.03em',
      },
    ],
    16: [
      '16rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.03em',
      },
    ],
    9.6: [
      '9.6rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.03em',
      },
    ],
    9: [
      '9rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.03em',
      },
    ],
    6.4: [
      '6.4rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.03em',
      },
    ],
    5.6: [
      '5.6rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.02em',
      },
    ],
    5.2: [
      '5.2rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.02em',
      },
    ],
    4.8: [
      '4.8rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.02em',
      },
    ],
    3.2: [
      '3.2rem',
      {
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
    ],
    2.6: [
      '2.6rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.02em',
      },
    ],
    2.4: [
      '2.4rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.02em',
      },
    ],
    2: [
      '2rem',
      {
        lineHeight: '0.9',
        letterSpacing: '-0.02em',
      },
    ],
    base: [
      '1.8rem',
      {
        lineHeight: '1.252',
        letterSpacing: '-0.01em',
      },
    ],
    1.6: [
      '1.6rem',
      {
        lineHeight: '1.35',
        letterSpacing: '-0.01em',
      },
    ],
    1.4: [
      '1.4rem',
      {
        lineHeight: '1.35',
        letterSpacing: '-0.01em',
      },
    ],
    0: [
      '0',
      {
        lineHeight: '0',
        letterSpacing: '0',
      },
    ],
  },
  lineHeight: {
    none: '1',
    normal: '1.2',
  },
  letterSpacing: {
    m01: '-0.01em',
    m02: '-0.02em',
    m03: '-0.03em',
    normal: '0',
    p01: '0.01em',
    p02: '0.01em',
    p03: '0.01em',
  },
  fontFamily: {
    base: 'var(--base-font)',
    secondary: 'var(--sb-font)',
    // secondary: 'var(--secondary-font)',
  },
};
