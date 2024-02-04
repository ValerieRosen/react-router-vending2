import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import CandyBar from "./CandyBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/soda" element={<Soda />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/candybar" element={<CandyBar />} />
    </BrowserRouter>
  );
}

export default App;
