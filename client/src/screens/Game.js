import React from "react";
import useGetPrompt from "../hooks/useGetPrompt";
import cityscape from "../images/City.svg";
import cloud from "../images/Cloud.svg";
import sippy from "../images/sippy.svg";

export default function Game() {
  const { action: getPrompt, data: prompt } = useGetPrompt();

  function nextPrompt() {
    getPrompt();
    document.querySelector(".game .prompt .bg-area").classList.add("next");
    setTimeout(() => {
      document.querySelector(".game .prompt .bg-area").classList.remove("next");
    }, 750);
  }

  return (
    <div className="game">
      <div className="prompt">
        <div className="bg-area">
          <p>{prompt?.content} SipSip!</p>
          <button onClick={nextPrompt} type="button" className="active">
            Next Prompt
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
        <img src={sippy} alt="Sippy" id="sippy" />
      </div>
    </div>
  );
}
