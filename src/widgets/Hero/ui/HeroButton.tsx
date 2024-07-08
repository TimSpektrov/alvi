import { FC, ReactNode } from 'react';
import { cvaHeroButton } from '@/widgets/Hero/ui/HeroStyles';

interface IHeroButton {
  icon?: ReactNode;
  disabled?: boolean;
  onClick: (value: any) => void;
  value: any;
  reverse?: boolean;
  children: ReactNode;
}
export const HeroButton: FC<IHeroButton> = ({
  disabled,
  onClick,
  value,
  reverse,
  children,
}) => {
  const handleClick = () => {
    onClick(value);
  };
  return (
    <button
      className={cvaHeroButton({ reverse })}
      disabled={disabled}
      onClick={handleClick}>
      {children}
    </button>
  );
};
