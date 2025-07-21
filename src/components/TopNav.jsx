import { Link, useLocation } from "react-router";
import gear from "../images/gear.svg";
import home from "../images/home.svg";
import back from "../images/back.svg";

export default function TopNav() {
  const location = useLocation();
  const isGamePage = location.pathname === "/game";
  const isSettingsPage = location.pathname === "/settings";

  return (
    <div className="top-nav">
      {isGamePage && (
        <div
          className="global-home"
          style={{ position: "absolute", top: 16, left: 16, zIndex: 1000 }}
        >
          <Link
            to="/"
            className="home-btn"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img src={home} alt="Home" style={{ width: 32, height: 32 }} />
          </Link>
        </div>
      )}
      {isSettingsPage && (
        <div
          className="global-back"
          style={{ position: "absolute", top: 16, left: 16, zIndex: 1000 }}
        >
          <Link
            to={-1}
            className="back-btn"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img src={back} alt="Back" style={{ width: 32, height: 32 }} />
          </Link>
        </div>
      )}
      {!isSettingsPage && (
        <div
          className="global-settings"
          style={{ position: "absolute", top: 16, right: 16, zIndex: 1000 }}
        >
          <Link
            to="/settings"
            className="settings-btn"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img src={gear} alt="Settings" style={{ width: 32, height: 32 }} />
          </Link>
        </div>
      )}
    </div>
  );
}
