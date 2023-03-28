import React from "react";
import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Game from "./screens/Game";

const Router = () => {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default Router;
