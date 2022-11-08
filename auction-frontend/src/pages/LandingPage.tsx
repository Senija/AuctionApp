import React from "react";
import CategoriesMenu from "../components/CategoriesMenu";
import Container from "react-bootstrap/Container";

const LandingPage: React.FC = () => {
  return (
    <>
      <Container>
        <div>
            <CategoriesMenu />
        </div>
        
      </Container>
    </>
  );
};

export default LandingPage;
