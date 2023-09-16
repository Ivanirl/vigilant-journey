import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../Resources/Oriflame_logo.png";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuha, setMenuha] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 550) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const navy = useNavigate();
  const sign = () => {
    navy("/Signup");
  };

  return (
    <div className="Nav" id={scrolled ? "scrollo" : ""}>
      <div className="container">
        <div className="rightboy">
          <button
            className="mens"
            onClick={() => {
              setMenuha(!menuha);
            }}
          >
            <svg
              width="49"
              height="25"
              viewBox="0 0 51 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={menuha ? "kross" : "unkross"}
            >
              <rect className="ops thefirst" width="32" y={menuha? "-5":""} x={ menuha ? "3": ""}height="2.5" rx="1.5" fill="#6e6e6e" />
              <rect className="ops thesecond" y="9" width="32" height="2.5" rx="1.5" fill="#6e6e6e" />
              <rect className="ops thethird" y={menuha? "19":"17"} x={ menuha ? "-11": ""} width="32" height="2.5" rx="1.5" fill="#6e6e6e" />
            </svg>
          </button>

          <div className="logo">
            <Link to="/" onClick={() => onUpdateActiveLink("home")}>
              <img src={Logo} className="logoimage" alt="logo image" />
            </Link>
          </div>
          <div className="getstarted">
            <div className="seperator"></div>
            <input placeholder="Search"></input>
          </div>
          <ul className="closedNav" id="nav-bubble">
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
                    fill="#6e6e6e"
                  />
                  <rect
                    x="6.22681"
                    y="34.8887"
                    width="49"
                    height="3"
                    rx="1.5"
                    transform="rotate(-45.3915 6.22681 34.8887)"
                    fill="#6e6e6e"
                  />
                </svg>
              </button>
            </li>
            <li>
              <Link
                to="/filler"
                className={
                  activeLink === "/filler"
                    ? "active navbar-link"
                    : "inactive navbar-link"
                }
                onClick={() => {
                  if (window.screenX < 531) {
                    onUpdateActiveLink("/filler");
                  } else {
                    onUpdateActiveLink("/filler");
                    setMenuha(!menuha);
                  }
                }}
              >
                <span className="olodo">SIGN IN</span>
              </Link>
            </li>
            <li>
              <Link
                to="/filler2"
                className={
                  activeLink === "/filler2"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  if (window.screenX < 531) {
                    onUpdateActiveLink("/filler2");
                  } else {
                    onUpdateActiveLink("/filler2");
                    setMenuha(!menuha);
                  }
                }}
              >
                <span>Icon</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
