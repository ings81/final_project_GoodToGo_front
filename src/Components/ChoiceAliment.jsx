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
      <div className="item">
        {items.map(item => (
          <div className="menu-case">
            <button onClick={e => handleAdd(item)}>Plus</button>
            <div>
              <img src={item.image} alt={item.name} />
              <p>{item.title}</p>
            </div>

            <p>{item.description}</p>
            <p>
              <span>{item.price}</span>€
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiceAliment;
