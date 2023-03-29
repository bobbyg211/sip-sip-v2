import React, { useState } from "react";
import Landscape from "../components/Landscape";
import Disclaimer from "../components/Disclaimer";
import Game from "./Game";
import Home from "./Home";

export default function Global() {
  const [active, setActive] = useState(false);

  return (
    <div className="global">
      <Disclaimer />
      <div className={`wrapper ${active ? "active" : ""}`}>
        <Home setActive={setActive} />
        <Game />
        <Landscape />
      </div>
    </div>
  );
}
