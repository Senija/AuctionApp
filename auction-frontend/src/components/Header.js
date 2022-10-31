import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/App.css";
import GavelIcon from "@mui/icons-material/Gavel";
import { grey } from "@mui/material/colors";
import { purple } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="light">
        <Container>
          <a href="https://www.facebook.com/">
            <FacebookIcon fontSize="medium" sx={{ color: grey[50] }} />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramIcon fontSize="medium" sx={{ color: grey[50] }} />
          </a>
          <a href="https://twitter.com/">
            <TwitterIcon fontSize="medium" sx={{ color: grey[50] }} />
          </a>
          {/* <Link
            href="http://www.google.com"
            className={classes.link}
            target="_blank"
          >
            <SearchIcon />
          </Link> */}

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ color: grey[50] }}>Hi, John Doe</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand>
            <GavelIcon fontSize="medium" sx={{ color: grey[500] }} />
            <Navbar.Text style={{ color: purple[200] }}> AUCTION</Navbar.Text>
          </Navbar.Brand>
          {/* <form> */}

          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 1,
            }}
          >
            {/* <TextField
              fullWidth
              id="fullWidth"
              type="text"
              label="Try enter: Shoes"
              variant="standard"
            /> */}
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Try enter: Shoes"
              inputProps={{ "aria-label": "Try enter: Shoes" }}
            />

            <IconButton type="submit">
              <SearchIcon sx={{ color: grey[500] }} />
            </IconButton>
          </Paper>
          {/* </form> */}
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className="navLink" href="#shop">
              SHOP
            </Nav.Link>
            <Nav.Link className="navLink" href="#myaccount">
              ACCOUNT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
