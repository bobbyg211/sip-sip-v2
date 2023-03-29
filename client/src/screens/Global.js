import React, { useState } from "react";
import Landscape from "../components/Landscape";
import Disclaimer from "./Disclaimer";
import Game from "./Game";
import Home from "./Home";

export default function Global() {
  const [active, setActive] = useState(false);
  const [disc, setDisc] = useState(true);

  return (
    <div className="global">
      <Disclaimer setDisc={setDisc} />
      <div className={`wrapper ${disc ? "disc" : ""} ${active ? "active" : ""}`}>
        <Home setActive={setActive} />
        <Game />
        <Landscape />
      </div>
    </div>
  );
}
