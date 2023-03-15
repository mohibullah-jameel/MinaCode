import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const Cards = () => {
  const data = useSelector((state: any) => state.cardSlice.playerData);

  return (
    <div className=" max-w-[1259px] w-full grid grid-cols-3 gap-7 items-center p-10">
      {data?.map((dat: any) => (
        <Card
          key={dat.id}
          dat={dat}
          realName={dat.realName}
          playerName={dat.playerName}
          Asset={dat.Asset}
        />
      ))}
    </div>
  );
};

export default Cards;
