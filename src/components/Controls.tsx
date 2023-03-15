import { sortPlayerDataAsc, sortPlayerDataDsc } from '@/features/cardSlice';
import { PostAPI } from '@/services/actions';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

const Controls = () => {
  const selectedCard = useSelector(
    (state: any) => state.cardSlice.selectedCard
  );
  const [selected, setSelected] = useState(selectedCard[0]);
  const dispatch = useDispatch();

  const sortAscending = () => {
    dispatch(sortPlayerDataAsc());
  };
  const sortDescending = () => {
    dispatch(sortPlayerDataDsc());
  };

  const postMutation = useMutation(
    async () => {
      return await PostAPI(selected);
    },
    {
      onSuccess: (res) => {
        // on success
      },
      onError: (err) => {
        // on error
      },
    }
  );

  const submitReq = () => {
    postMutation.mutate();
  };

  return (
    <div className=" w-1/3 border-2 border-blue-800 p-4">
      <h3 className="text-4xl font-bold mb-7">Controls</h3>
      <div className="w-full flex space-x-5 text-white mb-3">
        <button
          onClick={sortAscending}
          className="bg-blue-800 py-2 px-3 rounded w-full"
        >
          SORT ASC
        </button>
        <button
          onClick={sortDescending}
          className="bg-blue-800 py-2 px-3 rounded w-full"
        >
          SORT DESC
        </button>
      </div>
      <button
        onClick={submitReq}
        className="w-full bg-blue-800 py-2 px-3 rounded text-white"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Controls;
