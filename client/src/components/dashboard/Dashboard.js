import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Navbar, Nav } from "react-bootstrap";
import { MDBRow, MDBContainer } from "mdbreact";
import { MdLocationOn } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";
import Footer from "../layout/Footer";
import Image from '../layout/Image';
import Video from '../layout/Video';
import Header from './profileHeader';



import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/places/viewplaces")
      .then(places => {
        this.setState(places.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {;
    const { user } = this.props.auth;
    const { places } = this.state;

    return (
      <div class="overflow">
        <Header />
        <Image />

        <MDBContainer className="mt-30">
          <MDBRow>
            <h3> What can we help you find, {user.name.split(" ")[0]} ?</h3>
          </MDBRow>
        </MDBContainer>

        <h3 className="ml-30">Places to Stay:</h3>

        <div className="row ml-50" >
    
          {places.map(item => (
            <div
              className="card"
              style={{
                width: 23 + "rem",
                margin: "2rem",
                borderRadius: "10px"
              }}
            >
              <img
                className="card-img-top"
                src={item.file}
                style={{ height: 15 + "rem" }}
                alt="Place"
              />
              <div className="card-body">
                <h1 className="card-title text-primary">{item.title}</h1>
                <p className="card-text text-dark font25">
                  {" "}
                  <b>
                    <GiHouse />
                  </b>{" "}
                  {item.description}{" "}
                </p>
                <p className="card-text text-dark font25">
                  {" "}
                  <b>
                    <FaRupeeSign />
                  </b>{" "}
                  {item.price}{" "}
                </p>
                <p className="card-text text-dark font25">
                  {" "}
                  <b>
                    <MdLocationOn />
                  </b>
                  {item.location}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
               <Video /> 
        <h2 className="center mb-40">
          {" "}
          <MdLocationOn /> Find Your Location Here!{" "}
        </h2>
        <iframe
          src="https://maps.google.com/maps?q=Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          height="500"
          width="100%"
          title="map"
          className="mb-100"
        ></iframe>
        <Footer />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
