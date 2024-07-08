import { FC, useState } from 'react';
import { cvaBurger, cvaBurgerLine } from '@/widgets/Header/ui/HeaderStyles';

interface IBurger {}
export const Burger: FC<IBurger> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className={cvaBurger()} onClick={() => setIsOpen(!isOpen)}>
      <div
        className={cvaBurgerLine({
          position: 'top',
          isOpenTop: Boolean(isOpen),
        })}></div>
      <div
        className={cvaBurgerLine({
          position: 'bottom',
          isOpenBottom: Boolean(isOpen),
        })}></div>
    </button>
  );
};
