import React from "react";

const ChoiceMenu = ({ title, menus, handleAdd, handleDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {menus.map(menu => (
          <div>
            <button onClick={e => handleAdd(menu)}>Plus</button>
            <button onClick={e => handleDelete(menu)}>Moins</button>
            <div>
              <img src={menu.image} alt={menu.name} />
              <p>{menu.title}</p>
            </div>

            <p>{menu.description}</p>
            <p>
              <span>{menu.price}</span>€
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiceMenu;
