import React from "react";
import DisplayPrice from "./DisplayPrice";
import { NavLink } from "react-router-dom";

const MiniRecapMenu = ({ selectedItems, handleDelete }) => {
  return (
    <div>
      <div>
        {selectedItems.map((item, i) => (
          <div key={i}>
            <div className="price">
              <NavLink to="/payment">
                {" "}
                <DisplayPrice items={selectedItems} />
              </NavLink>
            </div>

            <button className="buttondis" onClick={e => handleDelete(item)}>
              <i class="fas fa-minus-circle" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniRecapMenu;
