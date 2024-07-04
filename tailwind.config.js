// import { Config } from 'tailwindcss';
import { colors, spacing, typography } from './configuration/tailwind';

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      ...colors,
      ...spacing,
      ...typography,
    },
  },
};

export default config;
