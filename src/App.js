import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import DefaultLayout from "./components/Layout";
import Signup from "./pages/SignUp";

function App() {
  const location = useLocation()

  return (
    <DefaultLayout>
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
      </AnimatePresence>
    </DefaultLayout>
  );
}

export default App;
