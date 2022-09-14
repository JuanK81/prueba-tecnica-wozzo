import React from 'react';

const ItemPill = ({ name, onClick }) => {
  return (
    <div className="pill" onClick={onClick}>
      <p className="pill-item"> {name} </p>
      <p className="pill-close">X</p>
    </div>
  );
};

export default ItemPill;
