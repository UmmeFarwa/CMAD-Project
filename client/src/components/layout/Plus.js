import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../../css/style.css";

class PlusImage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className="mt-30 ml-10">Airbnb Plus places to stay</h2>
        <p className="mt-15 ml-10 ">
          A selection of places to stay verified for quality and design
        </p>
        <div>
          <Container className="mb-100 mt-30">
            <img
              src={require("../../Images/airbnb2.jpg")}
              style={{
                height: "auto",
                maxHeight: "65vh",
                maxWidth: "100%",
                minWidth: "100%",
                border: "none",
                display: "block",
                alt: "house"
              }}
            />
          </Container>
        </div>
      </div>
    );
  }
}

export default PlusImage;
