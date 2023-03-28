import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import * as canman from "../animations/canman.json";
import cityscape from "../images/City.svg";
import cloud from "../images/Cloud.svg";

export default function Home() {
  async function shareGame() {
    try {
      await navigator.share({
        title: "MDN",
        text: "Learn web development on MDN!",
        url: "https://developer.mozilla.org",
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#sippy"),
      animationData: canman,
    });
  }, []);

  return (
    <div className="home">
      <div className="content">
        <h1 className="title">SipSip</h1>
        <p>Pour decisions make great stories...</p>
        <div className="play">
          <Link className="primary-btn" to="/game">
            Play the game
          </Link>
        </div>
        <div className="share">
          <button className="secondary-btn" type="button" onClick={shareGame}>
            Share this game
          </button>
        </div>
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
