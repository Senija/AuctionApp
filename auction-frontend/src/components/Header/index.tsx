import React from 'react';
import "./Header.css";
import "../../assets/style/colors.css"
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "bootstrap/dist/css/bootstrap.min.css";
import GavelIcon from "@mui/icons-material/Gavel";
import { grey, pink } from "@mui/material/colors";
import { purple } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


const Header: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
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
         
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text >Hi, John Doe</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" variant='light'>
        <Container>
          <Navbar.Brand>
            <GavelIcon fontSize="medium" sx={{ color: grey[500] }} />
            <Navbar.Text style={{ color: purple[200] }}> AUCTION</Navbar.Text>
          </Navbar.Brand>
          
          <div className='inputDiv'>
            <form>
              <input className='input' type="text" placeholder='Try enter: Shoes'>
              </input>
              <IconButton type="submit">
              <SearchIcon sx={{ color: grey[500] }} />
            </IconButton>
            </form>
          </div>
          
          <Nav>
            <Nav.Link className='navLink' href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className='navLink' href="#shop">
              SHOP
            </Nav.Link>
            <Nav.Link className='navLink' href="#myaccount">
              ACCOUNT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
