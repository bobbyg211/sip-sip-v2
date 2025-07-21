import { Link } from "react-router";
import logo from "../images/logo.svg";
import share from "../images/share.svg";

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
    </div>
  );
}
