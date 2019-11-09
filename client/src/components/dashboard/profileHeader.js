import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Navbar, Nav } from "react-bootstrap";
class Header extends Component {
  state = {};
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              src={require("../../Images/redlogo.png")}
              height="30"
              width="30"
              alt="logo"
              className="mb-10 ml-10 mt-10"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ backgroundColor: "#343A40" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{
              backgroundColor: "#343A40",
              opacity: "0.7",
              paddingLeft: "10px"
            }}
          >
            <Nav className="mr-auto"></Nav>
            <Nav>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
                onClick={this.onLogoutClick}
                className="Buttons"
              >
                Logout
              </span>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Header);
  