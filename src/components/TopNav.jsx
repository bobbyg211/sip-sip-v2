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
        <div className="global-home">
          <Link to="/" className="nav-btn">
            <img src={home} alt="Home" className="nav-icon" />
          </Link>
        </div>
      )}
      {isSettingsPage && (
        <div className="global-back">
          <Link to={-1} className="nav-btn">
            <img src={back} alt="Back" className="nav-icon" />
          </Link>
        </div>
      )}
      {!isSettingsPage && (
        <div className="global-settings">
          <Link to="/settings" className="nav-btn">
            <img src={gear} alt="Settings" className="nav-icon" />
          </Link>
        </div>
      )}
    </div>
  );
}
