import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="Footer">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="container"
      >
        <div className="left">
          <img alt="Johnny logo" />
          <span>We've got shoes for everyone!</span>
          <div>
            <img alt="IG" />
            <img alt="FB" />
            <img alt="TW" />
          </div>
        </div>
        <div className="right">
          <ul className="vought1">
            <span>Links</span>
            <li>Home</li>
            <li>Features</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <ul className="vought2">
            <span>Support</span>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Security</li>
            <li>Accesibility</li>
          </ul>
          <ul className="vought3">
            <span>Legal</span>
            <li>Privacy and Policy</li>
            <li>Terms and Conditions</li>
            <li>Legal use</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
