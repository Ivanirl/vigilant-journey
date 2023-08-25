import NavBar from "../components/navbar";
import { motion } from "framer-motion";
import Nothing from "../components/empty";
import Footer from "../components/Footer";

export default function PreOrder() {
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