import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../Resources/Logogogogo.png";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [menuha, setMenuha] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const navy = useNavigate();
  const sign = () => {
    navy("/Signup");
    onUpdateActiveLink("Signup");
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
                to="/"
                onClick={() => {
                  if (window.screenX < 531) {
                    onUpdateActiveLink("home");
                  } else {
                    onUpdateActiveLink("home");
                    setMenuha(!menuha);
                  }
                }}
              >
                <span
                  className={
                    activeLink === "home"
                      ? "active navbar-link"
                      : "inactive navbar-link"
                  }
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/browse"
                onClick={() => {
                  if (window.screenX < 531) {
                    onUpdateActiveLink("browse");
                  } else {
                    onUpdateActiveLink("browse");
                    setMenuha(!menuha);
                  }
                }}
              >
                <span
                  className={
                    activeLink === "browse"
                      ? "active navbar-link"
                      : "inactive navbar-link"
                  }
                >
                  Browse
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/PreOrder"
                onClick={() => {
                  if (window.screenX < 531) {
                    onUpdateActiveLink("PreOrder");
                  } else {
                    onUpdateActiveLink("PreOrder");
                    setMenuha(!menuha);
                  }
                }}
              >
                <span
                  className={
                    activeLink === "PreOrder"
                      ? "active navbar-link"
                      : "inactive navbar-link"
                  }
                >
                  Pre-Order
                </span>
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/rando"
                onClick={() => {
                  if (window.screenX < 531) {
                    onUpdateActiveLink("rando");
                  } else {
                    onUpdateActiveLink("rando");
                    setMenuha(!menuha);
                  }
                }}
              >
                <span
                  className={
                    activeLink === "rando"
                      ? "active navbar-link"
                      : "inactive navbar-link"
                  }
                >
                  rando
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="getstarted">
          <div className="seperator"></div>
          <button className="getStarted" onClick={sign}>
            About
          </button>
          <div className="seperator"></div>
          <button className="getStarted" onClick={sign}>
            Sign in
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
