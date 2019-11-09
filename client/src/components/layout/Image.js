import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={require("../../Images/header-background.jpg")}
          style={{
            height: "auto",
            maxHeight: "100vh",
            maxWidth: "100%",
            minWidth: "100%",
            border: "none",
            display: "block",
            alt: "house"
          }}
        />
      </div>
    );
  }
}

export default Image;
