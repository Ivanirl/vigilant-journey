import { motion } from "framer-motion";
import TwoBars from "../components/NavandSubbar";
import Nothing from "../components/empty";

function Home() {
  return (
    <div>
      <TwoBars />
      <div className="bodice">
        <Nothing />
      </div>
    </div>
  );
}

export default Home;
