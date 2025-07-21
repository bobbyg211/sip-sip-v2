import { useEffect } from "react";
import { useLocation } from "react-router";
import lottie from "lottie-web";
import canman from "../animations/canman.json";
import sippy from "../images/sippy.svg";
import sippyLg from "../images/sippy-lg.svg";
import cheesyLg from "../images/cheesy-lg.svg";

export default function Characters() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isGamePage = location.pathname === "/game";

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#sippy"),
      animationData: canman,
    });
  }, [isHome]);

  return (
    <div className={`characters${!isHome ? " not-home" : ""}`}>
      {isHome ? (
        <div id="sippy"></div>
      ) : (
        <img src={isGamePage ? sippy : cheesyLg} alt="Sippy" id="sippy" />
      )}

      <img className="sippy-lg" src={sippyLg} alt="" />
      <img className="cheesy-lg" src={cheesyLg} alt="" />
    </div>
  );
}
