import { setSelectedCard } from '@/features/cardSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const Card = ({ realName, playerName, Asset, dat }: any) => {
  const dispatch = useDispatch();
  const selectedCard = (dat: any) => {
    dispatch(setSelectedCard(dat));
  };

  return (
    <div
      className="border-2 border-blue-800 p-4 max-w-[300px] w-full cursor-pointer"
      onClick={() => selectedCard(dat)}
    >
      <li>{realName}</li>
      <li className='truncate'>{playerName}</li>
      <li>{Asset}</li>
    </div>
  );
};

export default Card;
