import Controls from './Controls';
import Details from './Details';

const TopSection = () => {
  return (
    <div className="flex space-x-5 p-5 ">
      <Details />
      <Controls />
    </div>
  );
};

export default TopSection;
