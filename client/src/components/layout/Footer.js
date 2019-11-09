import React, { Component } from "react";
import { MdCopyright } from "react-icons/md";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import "../../css/style.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaAirbnb } from "react-icons/fa";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container className="mt-70 Footer">
          <Row>
            <Col xs={6} md={3}>
              <ul>
                <li>
                  <h6>Airbnb</h6>
                </li>
                <li>Careers</li>
                <li>News</li>
                <li>Policies</li>
                <li>Help</li>
                <li>Diversity & Belonging</li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul>
                <li>
                  <h6>Discover</h6>
                </li>
                <li>Trust & Safety</li>
                <li>Travel Credits</li>
                <li>Gift Cards</li>
                <li>Airbnb Citizen</li>
                <li>Bussiness Travel</li>
                <li>Things To Do</li>
                <li>
                  Airbnbmap <Badge variant="success">New</Badge>{" "}
                </li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul>
                <li>
                  <h6>Hosting</h6>
                </li>
                <li>Hospitality</li>
                <li>Responsible Hosting</li>
                <li>Community Center</li>
                <li>
                  Host an Experience <Badge variant="success">New</Badge>{" "}
                </li>
                <li>Open Homes</li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <ul>
                <li>
                  {" "}
                  <FaFacebookF /> <FaTwitter /> <FaInstagram />{" "}
                </li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Site Map</li>
              </ul>
            </Col>
          </Row>
          <hr />
          <p className="mb-40 mt-30">
            {" "}
            <FaAirbnb /> <MdCopyright />
            2019 Airbnb, Inc. All rights reserved.
            <Button variant="outline-secondary ">English</Button>
            <Button variant="outline-secondary ">USD - $</Button>
          </p>
        </Container>
      </div>
    );
  }
}

export default Footer;
