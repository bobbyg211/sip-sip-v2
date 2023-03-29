import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import * as canman from "../animations/canman.json";
import logo from "../images/logo.svg";
import share from "../images/share.svg";
import sippyLg from "../images/sippy-lg.svg";
import cheesyLg from "../images/cheesy-lg.svg";

export default function Home({ setActive }) {
  async function shareGame() {
    try {
      await navigator.share({
        title: "SipSip",
        text: "SipSip: Pour decisions make great stories...",
        url: "https://playsipsip.com",
      });
    } catch (err) {
      console.log(err);
    }
  }

  function startGame() {
    setActive(true);
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
        <img className="title" src={logo} alt="SipSip" />
        <p>Pour decisions make great stories...</p>
        <div className="play">
          <button onClick={startGame} type="button" className="primary-btn">
            Play the game
          </button>
        </div>
        <div className="share">
          <button className="secondary-btn" type="button" onClick={shareGame}>
            <img src={share} alt="" />
            Share this game
          </button>
        </div>
      </div>
      <div className="characters">
        <div id="sippy"></div>
        <img className="sippy-lg" src={sippyLg} alt="" />
        <img className="cheesy-lg" src={cheesyLg} alt="" />
      </div>
    </div>
  );
}
