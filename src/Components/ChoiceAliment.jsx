import React from "react";
import "./../style/Aliment.css";

const ChoiceAliment = ({ title, items, handleAdd, handleDelete }) => {
  if (!items) {
    return <h1>No items</h1>;
  }
  console.log(items);
  return (
    <div>
      <h1>{title}</h1>
      <div className="menu">
        {items.map(item => (
          <div className="menu-case-ali">
            <div>
              <img src={item.image} alt={item.name} />
              <p>{item.title}</p>
            </div>

            <div className="price-plus">
              <button onClick={e => handleAdd(item)}>Plus</button>
              <p>
                <span>{item.price}</span>€
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiceAliment;
