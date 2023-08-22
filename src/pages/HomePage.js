import { motion } from "framer-motion";
import NavBar from "../components/navbar";
import Subbar from "../components/Subbar";

function Home() {
  return (
    <div>
      <NavBar>
        <Subbar />
      </NavBar>
    </div>
  );
}

export default Home;
