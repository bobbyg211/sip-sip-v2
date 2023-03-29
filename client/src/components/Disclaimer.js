import React, { useEffect } from "react";

export default function Disclaimer() {
  function agreeToPlay() {
    document.querySelector(".disclaimer").classList.remove("active");
    setTimeout(() => {
      document.querySelector(".disclaimer").style.display = "none";
    }, 500);
  }

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".disclaimer").classList.add("active");
    }, 250);
  }, []);

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
    </div>
  );
}
