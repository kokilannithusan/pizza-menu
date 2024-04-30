import React from "react";
import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHours = 22;
  const isOpen = hour >= openHour && hour <= closeHours;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} openHour />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHours}:00.
        </p>
      )}
    </footer>
  );
}
