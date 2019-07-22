import React from "react";
import DisplayPrice from "./DisplayPrice";
import { NavLink } from "react-router-dom";

const RecapMenu = ({ selectedItems, handleDelete }) => {
  return (
    <div>
      <h1>Recap</h1>
      {selectedItems.map((item, i) => (
        <div key={i}>
          <p>{item.title}</p>
          <button onClick={e => handleDelete(item)}>Moins</button>
        </div>
      ))}
      <DisplayPrice items={selectedItems} />
      <NavLink to="/payment">PAY NOW</NavLink>
    </div>
  );
};

export default RecapMenu;
