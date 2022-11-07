import React from "react";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import "./Footer.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footerMain">
        <Container>
          <div className="containerF">
            <div className="title">
              AUCTION <br /> <br />
              <Link className="link" to="/aboutus">
                {" "}
                About us
              </Link>{" "}
              <br />
              <Link className="link" to="terms">
                {" "}
                Terms and Conditions
              </Link>
              <br />
              <Link className="link" to="privacypolicy">
                {" "}
                Privacy and Policy
              </Link>
              <br />
            </div>
            <div className="title">
              GET IN TOUCH
              <br /> <br />
              <p className="link">
                Call us at +123 797-567-2535
                <br />
                <a className="link" href="mailto: support@auction.com">
                  support@auction.com
                </a>
              </p>
            </div>
            <div className="title">
              NEWSLETTER
              <br /> <br />
              <p className="link">
                Enter your email adress and get notified about <br></br> new
                products. We hate spam!
              </p>
              <div className="containerInput">
              <form>
                <input className="inputF" type="text" placeholder='Your email adress'></input>
                <Button variant="outlined" color="secondary" sx={{margin: 2, alignItems: 'center'}} endIcon={<ArrowForwardIosIcon />}>Go </Button>
              </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer
