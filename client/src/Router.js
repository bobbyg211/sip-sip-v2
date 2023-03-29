import React from "react";
import { Routes, Route } from "react-router";
import Global from "./screens/Global";

const Router = () => {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Global />} />
      </Routes>
    </div>
  );
};

export default Router;
