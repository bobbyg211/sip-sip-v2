import { useState } from "react";
import cityscape from "../images/City.svg";
import cloud from "../images/Cloud.svg";
import sippyLg from "../images/sippy-lg.svg";
import cheesyLg from "../images/cheesy-lg.svg";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

export default function Settings() {
  const [hideAdult, setHideAdult] = useState(getCookie("hideAdult") === "true");

  function handleCheckbox(e) {
    setHideAdult(e.target.checked);
    setCookie("hideAdult", e.target.checked);
  }

  return (
    <div className="settings">
      <div className="options">
        <div className="content">
          <h2>Settings</h2>
          <div className="option">
            <label>
              <input type="checkbox" checked={hideAdult} onChange={handleCheckbox} /> Hide
              adult/NSFW prompts
            </label>
          </div>
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
        <img src={cheesyLg} alt="Sippy" id="sippy" />
        <img className="sippy-lg" src={sippyLg} alt="" />
        <img className="cheesy-lg" src={cheesyLg} alt="" />
      </div>
    </div>
  );
}
