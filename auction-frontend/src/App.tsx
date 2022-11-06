import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
     <Router>
        
        <Header/>
        {/* <Routes>
          <Route path="/termsAndConditions" element={<TermsAndCOnditions />}></Route>
        </Routes>
        <Routes>
          <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
        </Routes> */}
        
     
    </Router>
    </>
  );
}

export default App;
