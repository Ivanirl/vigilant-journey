import Cardinho from "../Resources/productimage.png";
import { motion } from "framer-motion";

export default function CardA() {
  return (
    <div className="CardA">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="smaller-box"
      >
        <div className="top">
          <img src={Cardinho} />
        </div>
        <div className="bottom">
          <div className="one">
            <div className="left">
              <span className="big">MILK AND HONEY GOLD</span>
              <span className="small">Cleansing Cream Calendula</span>
            </div>
            <div className="right">
              <span>$270</span>
            </div>
          </div>
          <div className="two">
            <div className="left">
              <div className="color-box">
                <div className="R circle"></div>
                <div className="B circle"></div>
                <div className="A circle"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
