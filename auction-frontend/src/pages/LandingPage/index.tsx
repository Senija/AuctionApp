import React from "react";
import CategoriesMenu from "../../components/CategoriesMenu";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import HighlightedProduct from "../../components/HighlightedProduct/index";
import Tab from "../../components/Tab/index";
import Tabs from "../../components/Tabs";
import Product from "../../components/Product";
import ProductGrid from "../../components/ProductGrid";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Container style={{ backgroundColor: "var(--white)" }}>
          <div className="landingPageDiv">
            <CategoriesMenu />
            <HighlightedProduct />
          </div>

          <Tabs>
            <Tab title="New Arrivals"><ProductGrid/></Tab>
            <Tab title="Last chance">probaaa2</Tab>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
