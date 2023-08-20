import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Signup() {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const navy = useNavigate();
  const sign = () => {
    navy("/");
    onUpdateActiveLink("");
  };
  return (
    <motion.div
      className="biggy"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="SignUp">
        <div className="body">
          <div className="Quote">
            <h1>
              {" "}
              <span>"</span>
              Shoes for Everyone!
            </h1>
          </div>
          <section className="left"></section>
          <section className="right">
            <div className="rootbeer">
              <div className="floating">
                <img />
              </div>
              <div className="input-container">
                <div className="descript">
                  <div className="header">
                    <h1>Hey There!</h1>
                    <span>
                      Sign in to your account to access your cart and shop!
                    </span>
                  </div>
                  <button>Sign in with Google</button>
                </div>
                <div className="seperator">
                  <div className="rectan lefff"></div>
                  <span>or</span>
                  <div className="rectan righhh"></div>
                </div>
                <div className="input-field">
                  <form>
                    <input type="text" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <span className="for">Forgot Password</span>
                    <button onClick={sign}>Submit</button>
                    <span className="don">
                      Don't have an account? <span>Sign up</span>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default Signup;
