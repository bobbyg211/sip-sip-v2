import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import * as canman from "../animations/canman.json";
import logo from "../images/logo.svg";
import cityscape from "../images/City.svg";
import cloud from "../images/Cloud.svg";
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
        <img className="sippy-lg" src={sippyLg} alt="" />
        <img className="cheesy-lg" src={cheesyLg} alt="" />
      </div>
    </div>
  );
}
