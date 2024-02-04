import React from "react";
import chipBag from "./chips.png";
import { Link } from "react-router-dom";
import "./Chips.css";

//First item in vending machine

function Chips() {
  return (
    <div className="Chips">
      <img src={chipBag} alt="Chips" />
      <h1>
        <Link to="/">GO BACK</Link>
      </h1>
    </div>
  );
}

export default Chips;
