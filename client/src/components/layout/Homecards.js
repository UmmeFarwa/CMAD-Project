import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class Homecards extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4 className="mt-30 ml-10">Explore Airbnb</h4>
        <Row>
          <Col xs={6} md={3}>
            <Card border="light" className="border">
              <Card.Img variant="top" src={require("../../Images/stays.jpg")} />
              <Card.Body>Stays</Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card border="light" className="border">
              <Card.Img
                variant="top"
                src={require("../../Images/experience.jpg")}
              />
              <Card.Body>Experiences</Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card border="light" className="border">
              <Card.Img
                variant="top"
                src={require("../../Images/adventure.jpg")}
              />
              <Card.Body>Adventures</Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card border="light" className="border">
              <Card.Img
                variant="top"
                src={require("../../Images/restaurant.jpg")}
              />
              <Card.Body>Restaurants</Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Homecards;
