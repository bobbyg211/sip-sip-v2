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
    React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });

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
          {renderHTML(currPrompt)}
          <button onClick={promptTrans} type="button" className="primary-btn">
            Next
          </button>
        </div>
        <div className="prompt prompt-2">
          {renderHTML(nextPrompt)}
          <button onClick={promptTrans} type="button" className="primary-btn">
            Next
          </button>
        </div>
      </div>
      <div className="share">
        <button className="secondary-btn" type="button" onClick={shareGame}>
          <img src={share} alt="" />
          Share this game
        </button>
      </div>
      <div className="characters">
        <img src={sippy} alt="Sippy" id="sippy" />
        <img className="sippy-lg" src={sippyLg} alt="" />
        <img className="cheesy-lg" src={cheesyLg} alt="" />
      </div>
    </div>
  );
}
