import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Game from "./screens/Game";
import Settings from "./screens/Settings";
import Disclaimer from "./components/Disclaimer";
import TopNav from "./components/TopNav";
import Landscape from "./components/Landscape";
import Characters from "./components/Characters";

const Router = () => {
  return (
    <div id="main">
      <TopNav />
      <Disclaimer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      <Characters />
      <Landscape />
    </div>
  );
};

export default Router;
