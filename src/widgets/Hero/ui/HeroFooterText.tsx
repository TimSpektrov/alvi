import { FC } from 'react';
import {
  cvaHeroFooterText,
  cvaHeroFooterTextDescription,
  cvaHeroFooterTextTitle,
} from '@/widgets/Hero/ui/HeroStyles';

interface IHeroFooterText {
  title: string;
  description: string;
}
export const HeroFooterText: FC<IHeroFooterText> = ({ title, description }) => {
  return (
    <div className={cvaHeroFooterText()}>
      <h3 className={cvaHeroFooterTextTitle()}>{title}</h3>
      <p className={cvaHeroFooterTextDescription()}>{description}</p>
    </div>
  );
};
