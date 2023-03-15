import { useSelector } from 'react-redux';

const Details = () => {
  const selectedCard = useSelector(
    (state: any) => state.cardSlice.selectedCard
  );

  return (
    <div
      className={` ${
        Object.keys(selectedCard[0]).length > 0 ? 'visible' : 'invisible'
      }  w-2/3 flex-grow border-2 p-4 border-blue-800 transition-all ease-in-out duration-700 `}
    >
      <h3 className="text-4xl font-bold mb-7">Details</h3>
      {selectedCard.map((selected: any) => (
        <div className="list-inside" key={selected.id}>
          <li>{selected.realName}</li>
          <li>{selected.playerName}</li>
          <li>{selected.Asset}</li>
        </div>
      ))}
    </div>
  );
};

export default Details;
