import Select from './Select';


// Options array to render list
const options = [
  {
    id: 1,
    name: 'Family',
  },
  {
    id: 2,
    name: 'Family in law',
  },
  {
    id: 3,
    name: 'Co-workers',
  },
  {
    id: 4,
    name: 'Friends',
  },
  {
    id: 5,
    name: 'Basckedball Club',
  },
  {
    id: 6,
    name: 'Startup Investor Colleagues',
  },
  {
    id: 7,
    name: 'Swiss Embassy',
  },
  {
    id: 8,
    name: 'Zurich Meetup Group',
  },
];

const TestComponent = () => {
  return (
    <div className="test">
      <div className="test-container">
        <Select options={options} title="Default" />
      </div>
    </div>
  );
};

export default TestComponent;
