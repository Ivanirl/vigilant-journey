import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import DefaultLayout from "./components/Layout";

function App() {
  return <DefaultLayout>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="portfolio" element={<Portfolio />}></Route>
    </Routes>
  </DefaultLayout>;
}

export default App;
