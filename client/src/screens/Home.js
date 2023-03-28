import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import * as canman from "../animations/canman.json";
import cityscape from "../images/City.svg";
import cloud from "../images/Cloud.svg";

export default function Home() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#sippy"),
      animationData: canman,
    });
  }, []);

  return (
    <div className="home">
      <h1 className="title">SipSip</h1>
      <p>Pour decisions make for great stories...</p>
      <div className="play">
        <Link to="/game">
          <button type="button">Play the game</button>
        </Link>
      </div>
      <div class="share">
        <p>Share this game</p>
      </div>
      <div className="landscape">
        <div className="clouds">
          <div className="c-wrap">
            <img className="cloud cloud-1" src={cloud} alt="" />
            <img className="cloud cloud-2" src={cloud} alt="" />
            <img className="cloud cloud-3" src={cloud} alt="" />
            <img className="cloud cloud-4" src={cloud} alt="" />
          </div>
        </div>
        <div className="city">
          <img src={cityscape} alt="" />
        </div>
        <div className="ground"></div>
        <div id="sippy"></div>
      </div>
    </div>
  );
}
