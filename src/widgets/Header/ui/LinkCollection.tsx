import Link from 'next/link';
import routes from '@/shared/config/routes';
import { FC } from 'react';
import CollectionLink from '~/icons/collectionLink.svg';
import { cva } from 'class-variance-authority';

interface ILinkCollection {
  color?: 'light' | 'dark';
}
export const LinkCollection: FC<ILinkCollection> = ({ color }) => {
  const cvaLink = cva(
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
  const cvaSpan = cva(['Link-cvaSpan', 'leading-4']);
  return (
    <Link href={routes.collection}>
      <div className={cvaLink({ color })}>
        <CollectionLink />
        <span className={cvaSpan()}>коллекции</span>
      </div>
    </Link>
  );
};
