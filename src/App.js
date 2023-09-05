import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/HomePage";
import PreOrder from "./pages/PreOrder";
import DefaultLayout from "./components/Layout";
import Signup from "./pages/SignUp";
import Browse from "./pages/Browse";
import Random from "./pages/weirdnewpage";

function App() {
  const location = useLocation()

  return (
    <DefaultLayout>
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/PreOrder" element={<PreOrder />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/rando" element={<Random />}></Route>
      </Routes>
      </AnimatePresence>
    </DefaultLayout>
  );
}

export default App;
