import React, { useEffect } from "react";
import { Link } from "react-router";
import lottie from "lottie-web";
import canman from "../animations/canman.json";
import logo from "../images/logo.svg";

import share from "../images/share.svg";
import sippyLg from "../images/sippy-lg.svg";
import cheesyLg from "../images/cheesy-lg.svg";

export default function Home() {
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
          <Link className="primary-btn" to="/game">
            Play the game
          </Link>
        </div>
        <div className="share">
          <img src={share} alt="" />
          <button className="secondary-btn" type="button" onClick={shareGame}>
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
