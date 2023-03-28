import React, { useEffect, useState } from "react";
import useGetPrompt from "../hooks/useGetPrompt";
import cityscape from "../images/City.svg";
import cloud from "../images/Cloud.svg";
import sippy from "../images/sippy.svg";
import share from "../images/share.svg";
import sippyLg from "../images/sippy-lg.svg";
import cheesyLg from "../images/cheesy-lg.svg";

export default function Game() {
  const { action: getPrompts, data: prompts } = useGetPrompt();
  const [currPrompt, setCurrPrompt] = useState();
  const [nextPrompt, setNextPrompt] = useState();

  function promptTrans() {
    document.querySelector(".game .prompts .prompt-1").classList.add("next");
    document.querySelector(".game .prompts .prompt-2").classList.add("next");
    getPrompts().then((newPrompts) => {
      setTimeout(() => {
        setCurrPrompt(nextPrompt);
      }, 500);

      setTimeout(() => {
        document.querySelector(".game .prompts .prompt-1").classList.remove("next");
        document.querySelector(".game .prompts .prompt-2").classList.remove("next");
        setNextPrompt(newPrompts[1]?.content);
      }, 750);
    });
  }

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

  const renderHTML = (rawHTML) =>
    React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  useEffect(() => {
    if (!currPrompt || !nextPrompt) {
      setCurrPrompt(prompts[0]?.content);
      setNextPrompt(prompts[1]?.content);
    }
  }, [prompts]);

  return (
    <div className="game">
      <div className="prompts">
        <div className="prompt prompt-1">
          <p>{renderHTML(currPrompt)}</p>
          <button onClick={promptTrans} type="button" className="primary-btn">
            Next
          </button>
        </div>
        <div className="prompt prompt-2">
          <p>{renderHTML(nextPrompt)}</p>
          <button onClick={promptTrans} type="button" className="primary-btn">
            Next
          </button>
        </div>
      </div>
      <div className="share">
        <img src={share} alt="" />
        <button className="secondary-btn" type="button" onClick={shareGame}>
          Share this game
        </button>
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
        <img className="sippy-lg" src={sippyLg} alt="" />
        <img className="cheesy-lg" src={cheesyLg} alt="" />
      </div>
    </div>
  );
}
