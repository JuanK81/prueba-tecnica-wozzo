import ItemPill from './ItemPill';

import closeIcon from '../assets/close.png';

const SelectedOptionsList = ({ isSelected, setIsSelected, closeAll }) => {
  


  return (
    <div className="selected_opt">
      <div className="selected_opt-items">
        {isSelected &&
          isSelected.slice(0, 3).map(({ id, name, checked }) => {
            if (checked) {
              return (
                <div className="selected_opt-item" key={id}>
                  <ItemPill
                    onClick={(e) => {
                      setIsSelected(
                        isSelected.filter((option) => option.id !== id)
                      );
                    }}
                    name={name}
                  />
                </div>
              );
            } else {
              return '';
            }
          })}
      </div>
      {isSelected.length > 3 ? (
        <>
          <p className="selected_opt-dots">...</p>
        </>
      ) : null}

      <div className="selected_opt-controls">
        <div className="selected_opt-total">
          <p className="selected_opt-number">{isSelected.length}</p>
        </div>
        <button className="selected_opt-close" onClick={closeAll}>
          <img className="selected_opt-close-icon" src={closeIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SelectedOptionsList;
