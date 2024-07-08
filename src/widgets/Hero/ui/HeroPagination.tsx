import { FC } from 'react';

interface IHeroPagination {
  current: number;
  length: number;
}

const addZero = (num: number) => {
  return num.toString().padStart(2, '0');
};
export const HeroPagination: FC<IHeroPagination> = ({ current, length }) => {
  return (
    <div>
      {addZero(current + 1)}-{addZero(length)}
    </div>
  );
};
