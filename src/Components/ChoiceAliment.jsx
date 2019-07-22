import React from "react";

const ChoiceAliment = ({ title, items, handleAdd, handleDelete }) => {
  if (!items) {
    return <h1>No items</h1>;
  }
  console.log(items);
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {items.map(item => (
          <div>
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
