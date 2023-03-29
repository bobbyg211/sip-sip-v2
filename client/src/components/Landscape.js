import React from "react";
import cityscape from "../images/City.svg";
import cloud from "../images/Cloud.svg";

export default function Landscape() {
  return (
    <div className="landscape">
      <div className="clouds">
        <div className="c-wrap">
          <img className="cloud cloud-1" src={cloud} alt="" />
          <img className="cloud cloud-2" src={cloud} alt="" />
          <img className="cloud cloud-3" src={cloud} alt="" />
          <img className="cloud cloud-4" src={cloud} alt="" />
          <img className="cloud cloud-5" src={cloud} alt="" />
        </div>
      </div>
      <div className="city">
        <img src={cityscape} alt="" />
      </div>
      <div className="ground"></div>
    </div>
  );
}
