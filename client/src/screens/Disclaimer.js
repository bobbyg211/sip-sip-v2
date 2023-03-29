import React from "react";
import cloud from "../images/Cloud.svg";

export default function Disclaimer({ setDisc }) {
  function agreeToPlay() {
    document.querySelector(".disclaimer").classList.add("inactive");
    setDisc(false);
  }

  return (
    <div className="disclaimer">
      <div className="content">
        <small>To play:</small>
        <p>
          All players must be over the age of 21. Everyone will drink responsibly, be safe, and have
          fun!
        </p>
        <button onClick={agreeToPlay} type="button" className="primary-btn">
          Agree
        </button>
      </div>

      <div className="clouds">
        <div className="c-wrap">
          <img className="cloud cloud-1" src={cloud} alt="" />
          <img className="cloud cloud-2" src={cloud} alt="" />
          <img className="cloud cloud-3" src={cloud} alt="" />
          <img className="cloud cloud-4" src={cloud} alt="" />
          <img className="cloud cloud-5" src={cloud} alt="" />
          <img className="cloud cloud-6" src={cloud} alt="" />
        </div>
      </div>
    </div>
  );
}
