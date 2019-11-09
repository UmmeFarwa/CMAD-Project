import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              src={require("../../Images/redlogo.png")}
              height="35"
              width="35"
              alt="logo"
              className="mb-15 ml-10"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{
           
              backgroundColor:"#343A40"
          }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{
              backgroundColor:"#343A40",
              opacity: "0.7",
              paddingLeft: "10px"
            }}
          >
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
                className="Buttons "
              >
                Home
              </Link>
              <Link
                to="/register"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
                className="Buttons "
              >
                Sign up
              </Link>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
                className="Buttons"
              >
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
