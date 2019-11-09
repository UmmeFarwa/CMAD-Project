import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PeopleCard from "./Adventures";

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "PUERTO AYORA",
          company: "Slow Food - Galapagos Conscious Travel",
          description: "From $3,500/person · 6 days",
          src: require("../../Images/galapacos.jpg")
        },
        {
          id: 2,
          name: "LULEÅ",
          company: "Glamp under the northern lights",
          description: "From $2,502/person · 6 days",
          src: require("../../Images/glam.jpg")
        },
        {
          id: 3,
          name: "SECHELT",
          company: "Bioluminescent Overnight Yachtstay",
          description: "From $153/person · 2 days",
          src: require("../../Images/schelet.jpg")
        },
        {
          id: 4,
          name: "PARO",
          company: "Bhutan's Festivals & Cliffside Temples",
          description: "From $5,135/person · 11 days",
          src: require("../../Images/temple.jpg")
        }
      ]
    };
  }

  render() {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col xs={6} md={3}>
          <PeopleCard key={person.id} person={person} />
        </Col>
      );
    });
    return (
      <Container fluid className="mb-100">
        <h2 className="mt-30 ml-10">Introducing Airbnb Adventures</h2>
        <p className="mt-30 ml-10 mb-15">
          Multi-day trips led by local experts—activities, meals, and stays
          included
        </p>
        <Row>{peopleCards}</Row>
      </Container>
    );
  }
}

export default MainArea;
