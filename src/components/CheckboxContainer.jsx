import searchLogo from '../assets/search.png';

const CheckboxContainer = ({
  filter, 
  foundOptions, 
  isSelected, 
  optionName, 
  setIsSelected,
}) => {
  return (
    <>
      <div className="checkbox_cont-input-wrapper">
        <input
          className="checkbox_cont-input"
          onChange={filter}
          placeholder="Search"
          type="search"
          value={optionName}
        />
        <img className="checkbox_cont-input-logo" src={searchLogo} alt="" />
      </div>
      <section className="checkbox_cont-items">
        {foundOptions &&
          foundOptions.map((item) => (
            <div className="checkbox_cont-item" key={item.id}>
              <input
                onChange={(e) => {
                  if (e.target.checked) {
                    setIsSelected([
                      ...isSelected,
                      {
                        id: item.id,
                        name: item.name,
                        checked: e.target.checked,
                      },
                    ]);
                  } else {
                    setIsSelected(
                      isSelected.filter((option) => option.id !== item.id)
                    );
                  }
                }}
                className="checkbox_cont-checkbox"
                id={item.id}
                checked={isSelected.some(
                  (selectedItem) => selectedItem.id === item.id
                )}
                type="checkbox"
                name={item.name}
              />{' '}
              <label className="checkbox_cont-label" htmlFor={item.id}>
                {item.name}
              </label>{' '}
            </div>
          ))}
      </section>
    </>
  );
};

export default CheckboxContainer;
