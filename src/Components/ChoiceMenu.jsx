import React from "react";
import "./../style/MenuPage.css";

const ChoiceMenu = ({ title, menus, handleAdd, handleDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="menu">
        {menus.map(menu => (
          <div className="menu-case">
            <div>
              <img src={menu.image} alt={menu.name} />
              <p>{menu.title}</p>
            </div>

            <p>{menu.description}</p>
            <div className="price-plus">
              <p>
                <span>{menu.price}</span>€
              </p>
              <button onClick={e => handleAdd(menu)}>Plus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiceMenu;
