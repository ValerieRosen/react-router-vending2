import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";
import vendingMachineImg from "./vendingmachine.png";

//component that will show a list of snacks you can get from the vending machine

function VendingMachine() {
  return (
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}
    >
      <h2>
        <Link to="/soda">Soda</Link>
      </h2>
      <h2>
        <Link to="/chips">Chips</Link>
      </h2>
      <h2>
        <Link to="/candybar">Candy Bar</Link>
      </h2>
    </div>
  );
}

export default VendingMachine;
