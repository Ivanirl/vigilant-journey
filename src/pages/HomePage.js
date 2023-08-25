import { motion } from "framer-motion";
import NavBar from "../components/navbar";
import Nothing from "../components/empty";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="bodice">
        <Nothing />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
