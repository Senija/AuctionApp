import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./pages/AboutUs";
import CategoriesMenu from "./components/CategoriesMenu";
import LandingPage from "./pages/LandingPage/index";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/terms" element={<Terms/>}></Route>
        </Routes>
        <Routes>
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>}></Route>
        </Routes>
        <Routes>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
        </Routes>
        <Routes>
          <Route path="/shop" element={<LandingPage/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
