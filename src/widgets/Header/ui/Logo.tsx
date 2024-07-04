import { FC } from 'react';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import LogoIcon from '~/icons/logo.svg';
import routes from '@/shared/config/routes';

interface ILogo {
  color?: 'light' | 'dark';
}
export const Logo: FC<ILogo> = ({ color }) => {
  const cvaLink = cva(
    [
      'Logo-cva',
      'block h-auto',
      // '[&>svg]:h-1/1'
    ],
    {
      variants: {
        color: {
          light: ['light'],
          dark: ['dark'],
        },
      },
      defaultVariants: { color: 'dark' },
    }
  );

  const cvaIcon = cva(['h-100 w-100']);
  return (
    <Link href={routes.home} className={cvaLink({ color })}>
      <LogoIcon className={cvaIcon()} />
    </Link>
  );
};
