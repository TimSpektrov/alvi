import { FC, useState } from 'react';
import LineIcon from '~/icons/burger-item.svg';
import { cva } from 'class-variance-authority';

interface IBurger {}
export const Burger: FC<IBurger> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cvaBurger = cva(
    [
      'Header-cvaBurger',
      'w-1.6 relative',
      'flex h-0.7 items-center duration-200',
    ],
    {
      variants: {
        isOpen: {
          true: 'rotate-45',
        },
      },
    }
  );
  const cvaBurgerLine = cva(
    [
      'MenuButton-cvaBurgerLine',
      'absolute left-1/2 -translate-x-1/2 duration-200',
    ],
    {
      variants: {
        position: {
          top: 'top-0',
          bottom: 'bottom-0',
        },
        isOpenTop: {
          true: '!-rotate-[135deg] !top-0.3',
        },
        isOpenBottom: {
          true: '!rotate-[135deg] !bottom-0.2',
        },
      },
    }
  );
  return (
    <button className={cvaBurger()} onClick={() => setIsOpen(!isOpen)}>
      <LineIcon
        className={cvaBurgerLine({
          position: 'top',
          isOpenTop: Boolean(isOpen),
        })}
      />
      <LineIcon
        className={cvaBurgerLine({
          position: 'bottom',
          isOpenBottom: Boolean(isOpen),
        })}
      />
    </button>
  );
};
