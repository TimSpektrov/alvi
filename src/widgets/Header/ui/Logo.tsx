import { FC } from 'react';
import Link from 'next/link';
import LogoIcon from '~/icons/logo.svg';
import routes from '@/shared/config/routes';
import { cvaLogoIcon, cvaLogoLink } from '@/widgets/Header/ui/HeaderStyles';

interface ILogo {
  color?: 'light' | 'dark';
}
export const Logo: FC<ILogo> = ({ color }) => {
  return (
    <Link href={routes.home} className={cvaLogoLink({ color })}>
      <LogoIcon className={cvaLogoIcon()} />
    </Link>
  );
};
