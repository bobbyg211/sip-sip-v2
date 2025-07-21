import { useEffect, useState } from "react";
import cityscape from "../images/City.svg";
import cloud from "../images/Cloud.svg";
import sippy from "../images/sippy.svg";
import share from "../images/share.svg";
import sippyLg from "../images/sippy-lg.svg";
import cheesyLg from "../images/cheesy-lg.svg";
import prompts from "../data/prompts.json";

function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function seededShuffle(array, seed) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default function Game() {
  const [currPrompt, setCurrPrompt] = useState();
  const [nextPrompt, setNextPrompt] = useState();
  const [_, setRemainingPrompts] = useState([]);

  useEffect(() => {
    const seed = Date.now();
    const hideNSFW = getCookie("hideAdult") === "true";
    let promptList = prompts;
    if (hideNSFW) {
      promptList = prompts.filter((p) => !p.nsfw);
    }
    const shuffled = seededShuffle(promptList, seed);
    setRemainingPrompts(shuffled);
    setCurrPrompt(shuffled[0]);
    setNextPrompt(shuffled[1]);
  }, []);

  function promptTrans() {
    document.querySelector(".game .prompts .prompt-1").classList.add("next");
    document.querySelector(".game .prompts .prompt-2").classList.add("next");
    setTimeout(() => {
      setCurrPrompt(nextPrompt);
    }, 500);
    setTimeout(() => {
      document.querySelector(".game .prompts .prompt-1").classList.remove("next");
      document.querySelector(".game .prompts .prompt-2").classList.remove("next");
      setRemainingPrompts((prev) => {
        const idx = prev.indexOf(nextPrompt);
        let newArr = prev.slice();
        if (idx !== -1) newArr.splice(idx, 1);
        if (newArr.length === 0) {
          // All prompts used, reshuffle
          const seed = Date.now();
          const hideNSFW = getCookie("hideAdult") === "true";
          let promptList = prompts;
          if (hideNSFW) {
            promptList = prompts.filter((p) => !p.nsfw);
          }
          newArr = seededShuffle(promptList, seed);
        }
        setNextPrompt(newArr[0]);
        return newArr;
      });
    }, 750);
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

  return (
    <div className="game">
      <div className="prompts">
        <div className="prompt prompt-1">
          <p>{currPrompt ? currPrompt.text : ""}</p>
          <button onClick={promptTrans} type="button" className="primary-btn">
            Next
          </button>
        </div>
        <div className="prompt prompt-2">
          <p>{nextPrompt ? nextPrompt.text : ""}</p>
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
