import { FC } from 'react';
import { HeroButton } from '@/widgets/Hero/ui/HeroButton';
import ArrayIcon from '~/icons/sliderArrow.svg';
import { cvaHeroFooterButtonContainer } from '@/widgets/Hero/ui/HeroStyles';

interface IHeroNavigation {
  current: number;
  length: number;
  onClick: (number: any) => void;
}
export const HeroNavigation: FC<IHeroNavigation> = ({
  current,
  length,
  onClick,
}) => {
  return (
    <div className={cvaHeroFooterButtonContainer()}>
      <HeroButton
        disabled={current === 0}
        onClick={onClick}
        value={current - 1}
        // icon={ArrayIcon}
      >
        <ArrayIcon />
      </HeroButton>
      <HeroButton
        disabled={current === length - 1}
        onClick={onClick}
        value={current + 1}
        // icon={ArrayIcon}
        reverse={true}>
        <ArrayIcon />
      </HeroButton>
    </div>
  );
};
