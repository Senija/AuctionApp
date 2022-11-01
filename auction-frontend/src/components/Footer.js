import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { grey } from "@mui/material/colors";
import Container from "react-bootstrap/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../assets/App.css";
const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <Container>
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                AUCTION
              </p>
              <CDBBox
                flex="column"
                style={{ color: "#fafafa", cursor: "pointer", padding: "0" }}
              >
                <a className="link" href="/">
                  About Us
                </a>{" "}
                <br />
                <a className="link" href="/TermsAndConditions">
                  Terms and Conditions
                </a>{" "}
                <br />
                <a className="link" href="/">
                  Privacy and Policy
                </a>{" "}
                <br />
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p>GET IN TOUCH</p>
              <p>
                Call us at 123 4567-444-555 <br /> support@auction.com
              </p>

              {/* <CDBBox display="flex" className="mt-4">
            <CDBBtn flat color="dark">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox> */}
              <a href="https://www.facebook.com/" className="zaPading">
                <FacebookIcon fontSize="medium" sx={{ color: grey[50] }} />
              </a>
              <a href="https://www.instagram.com/" className="zaPading">
                <InstagramIcon fontSize="medium" sx={{ color: grey[50] }} />
              </a>
              <a href="https://twitter.com/" className="zaPading">
                <TwitterIcon fontSize="medium" sx={{ color: grey[50] }} />
              </a>
            </CDBBox>

            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                NEWSLETTER
              </p>
              {/* <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink href="/">Support</CDBFooterLink>
                <CDBFooterLink href="/">Sign Up</CDBFooterLink>
                <CDBFooterLink href="/">Sign In</CDBFooterLink>
              </CDBBox> */}
              <p>
                Enter your email adress and get notified about <br></br> new
                products. We hate spam!
              </p>
              
                <TextField
                  id="filled-search"
                  //label="Search field"
                  placeholder="Enter e-mail"
                  type="text"
                  variant="filled"
                  color="secondary"
                  sx={{ color: grey[900], bgcolor: grey[300]}}
                />
                <Button variant="outlined" color="secondary" sx={{margin: 2, alignItems: 'center'}} endIcon={<ArrowForwardIosIcon />}>Go </Button>
              
            </CDBBox>
            {/* <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Loop</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox> */}
          </CDBBox>
          <small className="text-center mt-5">
            &copy; Auction, 2022. All rights reserved.
          </small>
        </CDBBox>
      </Container>
    </CDBFooter>
  );
};

export default Footer;
