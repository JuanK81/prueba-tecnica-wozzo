import CheckboxContainer from './CheckboxContainer';
import SelectedOptionsList from './SelectedOptionsList';

const Dropdown = ({
  closeAll,
  filter,
  isOpen,
  isSelected,
  foundOptions,
  searchResult,
  setIsSelected,
  setSearchresult,
}) => {
  return (
    <div className="dropdown">
      <div className="dropdown-container">
        <SelectedOptionsList
          closeAll={closeAll}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        {isOpen && (
          <CheckboxContainer
            filter={filter}
            isSelected={isSelected}
            foundOptions={foundOptions}
            searchResult={searchResult}
            setIsSelected={setIsSelected}
            setSearchresult={setSearchresult}
          />
        )}
      </div>
    </div>
  );
};

export default Dropdown;
