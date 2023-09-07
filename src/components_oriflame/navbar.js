import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../Resources/Logo=hover.png";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [menuha, setMenuha] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const navy = useNavigate();
  const sign = () => {
    navy("/Signup");
  };

  return (
    <div className="NavBar">
      <div className="container">
        <div className="rightboy">
          <div className="logo">
            <Link to="/" onClick={() => onUpdateActiveLink("home")}>
              <img src={Logo} className="logoimage" alt="logo image" />
            </Link>
          </div>
          <button
            className="mens"
            onClick={() => {
              setMenuha(!menuha);
            }}
          >
            <svg
              width="49"
              height="16"
              viewBox="0 0 49 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="49" height="3" rx="1.5" fill="#D9D9D9" />
              <rect y="13" width="49" height="3" rx="1.5" fill="#D9D9D9" />
            </svg>
          </button>

          <ul className={menuha ? "navigation" : "closedNav"} id="nav-bubble">
            <li className="bubble-close">
              <button
                className="womens"
                onClick={() => {
                  setMenuha(!menuha);
                }}
              >
                <svg
                  width="49"
                  height="37"
                  viewBox="0 0 49 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8.01123"
                    width="49"
                    height="3"
                    rx="1.5"
                    transform="rotate(42.0982 8.01123 0)"
                    fill="#D9D9D9"
                  />
                  <rect
                    x="6.22681"
                    y="34.8887"
                    width="49"
                    height="3"
                    rx="1.5"
                    transform="rotate(-45.3915 6.22681 34.8887)"
                    fill="#D9D9D9"
                  />
                </svg>
              </button>
            </li>
            <li>
              <Link
                to="/oriflame"
                className={
                  activeLink === "oriflame" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  if (window.screenX < 531) {
                    onUpdateActiveLink("oriflame");
                  } else {
                    onUpdateActiveLink("oriflame");
                    setMenuha(!menuha);
                  }
                }}
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/filler"
                className={
                  activeLink === "filler" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  if (window.screenX < 531) {
                    onUpdateActiveLink("filler");
                  } else {
                    onUpdateActiveLink("filler");
                    setMenuha(!menuha);
                  }
                }}
              >
                <span>Filler</span>
              </Link>
            </li>
            <li>
              <Link
                to="/filler2"
                className={
                  activeLink === "filler2"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  if (window.screenX < 531) {
                    onUpdateActiveLink("filler2");
                  } else {
                    onUpdateActiveLink("filler2");
                    setMenuha(!menuha);
                  }
                }}
              >
                <span>Filler 2</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="getstarted">
          <div className="seperator"></div>
          <button className="getStarted" onClick={sign}>
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;