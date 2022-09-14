import { useState } from 'react';

import Dropdown from './Dropdown';

import arrowDown from '../assets/arrow-down.png';

const Select = ({ options }) => {
  const [isDropped, setIsDropped] = useState(false);
  const [isSelected, setIsSelected] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [searchResult, setSearchresult] = useState();
  const [optionName, setOptionName] = useState('');
  const [foundOptions, setFoundOptions] = useState(options);

  const dropMenu = () => {
    setIsDropped(!isDropped);
  };

  const selectOption = (opt) => {
    setSelectedOption(opt);
    setIsDropped(false);
  };

  const closeAll = () => {
    setIsSelected([]);
  };

  //  Filter options
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = options.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundOptions(results);
    } else {
      setFoundOptions(options);
      // If the text field is empty, show all users
    }

    setOptionName(keyword);
  };

  return (
    <div className="select">
      <div className="select-options">
        {!isDropped ? (
          <p className="select-option">
            {selectedOption === 0 ? 'Category' : null}
          </p>
        ) : (
          isDropped && (
            <>
              <p className="select-option" onClick={() => selectOption(0)}>
                Category
              </p>
              <p className="select-option" onClick={() => selectOption(1)}>
                Filled close
              </p>
              <p className="select-option" onClick={() => selectOption(2)}>
                Filled open
              </p>
            </>
          )
        )}
        <button className="select-btn" onClick={dropMenu}>
          <img className="select-btn-icon" src={arrowDown} alt="" />
        </button>
        {selectedOption === 1 && !isDropped && (
          <Dropdown
            filter={filter}
            closeAll={closeAll}
            foundOptions={foundOptions}
            isOpen={false}
            isSelected={isSelected}
            optionName={optionName}
            options={options}
            searchResult={searchResult}
            setIsSelected={setIsSelected}
            setSearchresult={setSearchresult}
          />
        )}
        {selectedOption === 2 && !isDropped && (
          <Dropdown
            filter={filter}
            closeAll={closeAll}
            foundOptions={foundOptions}
            isOpen={true}
            isSelected={isSelected}
            optionName={optionName}
            options={options}
            searchResult={searchResult}
            setIsSelected={setIsSelected}
            setSearchresult={setSearchresult}
          />
        )}
      </div>
    </div>
  );
};

export default Select;
