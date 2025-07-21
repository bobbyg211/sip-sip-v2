import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Game from "./screens/Game";

const Router = () => {
  return (
    <div id="main">
      <Routes>
        <Route path="/sip-sip-v2" element={<Home />} />
        <Route path="/sip-sip-v2/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default Router;
