import { FC } from 'react';
import { cvaHeroFooter } from '@/widgets/Hero/ui/HeroStyles';
import {
  HeroPagination,
  HeroFooterText,
  HeroNavigation,
} from '@/widgets/Hero/ui';

interface IHeroFooter {
  currentImage: number;
  length: number;
  onChange: (number: number) => void;
}
export const HeroFooter: FC<IHeroFooter> = ({
  currentImage,
  length,
  onChange,
}) => {
  const content = {
    title: 'alvi salotti',
    description: 'Идеальное сочетание стиля и уюта',
  };
  return (
    <div className={cvaHeroFooter()}>
      <HeroPagination current={currentImage} length={length} />
      <HeroFooterText title={content.title} description={content.description} />
      <HeroNavigation
        current={currentImage}
        length={length}
        onClick={onChange}
      />
    </div>
  );
};
