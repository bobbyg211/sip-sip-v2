import { useState } from "react";

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
    </div>
  );
}
