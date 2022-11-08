import React from "react";
import CategoriesMenu from "../../components/CategoriesMenu";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import HighlightedProduct from "../../components/HighlightedProduct/index";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Container style={{ backgroundColor: "var(--white)" }}>
          <div className="landingPageDiv">
            <CategoriesMenu />
            <HighlightedProduct />
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
