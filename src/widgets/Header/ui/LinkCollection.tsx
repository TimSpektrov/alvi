import Link from 'next/link';
import routes from '@/shared/config/routes';
import { FC } from 'react';
import CollectionLink from '~/icons/collectionLink.svg';
import {
  cvaCollectionLink,
  cvaCollectionSpan,
} from '@/widgets/Header/ui/HeaderStyles';

interface ILinkCollection {
  color?: 'light' | 'dark';
}
export const LinkCollection: FC<ILinkCollection> = ({ color }) => {
  return (
    <Link href={routes.collection}>
      <div className={cvaCollectionLink({ color })}>
        <CollectionLink />
        <span className={cvaCollectionSpan()}>коллекции</span>
      </div>
    </Link>
  );
};
