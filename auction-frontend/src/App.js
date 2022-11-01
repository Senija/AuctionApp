import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TermsAndCOnditions from "./components/TermsAndCOnditions";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/*       
      <Header/>
      <Footer/> */}
      <Router>
        
          <Routes>
            <Route path="/termsAndConditions" element={<TermsAndCOnditions />}></Route>
          </Routes>
       
      </Router>
    </div>
  );
}

export default App;
