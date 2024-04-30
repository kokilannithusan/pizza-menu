import React from "react";

export default function Order({ closeHours, openHour }) {
  return (
    <div className="order">
      <p>
        {" "}
        We're open form {openHour}:00 to {closeHours}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
