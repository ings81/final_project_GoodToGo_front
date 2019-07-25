import React from "react";
import DisplayPrice from "./DisplayPrice";
import { NavLink } from "react-router-dom";

const RecapMenu = ({ selectedItems, handleDelete }) => {
  return (
    <div>
      {selectedItems.map((item, i) => (
        <div key={i}>
<<<<<<< HEAD
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "capitalize"
            }}
          >
            {item.title}
          </p>
          <img
            src={item.image}
            alt="item"
            style={{ width: "7em", margin: "auto" }}
          />
          <button onClick={e => handleDelete(item)}>
            <i class="fas fa-minus-circle" />
          </button>
          <hr style={{ width: "80%" }} />
=======
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            {item.title}
          </p>
          <img src={item.image} alt="item" style={{ width: "7em" }} />
          <button onClick={e => handleDelete(i)}>Moins</button>
>>>>>>> 5443ba6a4a39dcb4bc4006bc0ecb0e31ace5a069
        </div>
      ))}
      <div className="display-price">
        <DisplayPrice items={selectedItems} />
        <NavLink to="/payment">PAY NOW</NavLink>
      </div>
    </div>
  );
};

export default RecapMenu;
