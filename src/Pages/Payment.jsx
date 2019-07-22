import React from "react";

const Payment = () => {
  return (
    <div className="d-flex col cb-container">
      <h3>Pay</h3>
      <label>Name on Card</label>
      <input type="text" />
      <label>Card Number</label>
      <input type="text" />
      <label>Expiration Date</label>
      <input type="date" />
      <label>Security Code</label>
      <input type="number" />
      <button className="button">Validate</button>
    </div>
  );
};

export default Payment;
