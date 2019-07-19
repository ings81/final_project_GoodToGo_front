import React from "react";

const DisplayPrice = ({ price }) => {
  return (
    <div>
      <p>
        <span>{price}</span>€
      </p>
    </div>
  );
};

export default DisplayPrice;
