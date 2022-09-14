import { useState } from 'react';

import checkIcon from '../assets/check.png';

export const CustomCheckbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox">
      <div
        onClick={checkHandler}
        className={`checkbox-icon ${isChecked && 'checked'}`}
      >
        {isChecked && (
          <img className="checkbox-icon-image" src={checkIcon} alt="" />
        )}
      </div>
      <p className="checkbox-text">{props.title}</p>
    </div>
  );
};

export default CustomCheckbox;
