import { motion } from "framer-motion";
import NavBar from "../components/navbar";
import Nothing from "../components/empty";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="bodice">
        <Nothing />
      </div>
    </div>
  );
}

export default Home;
