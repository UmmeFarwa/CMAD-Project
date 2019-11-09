import React, { Component } from "react";
import Homecards from "./Homecards";
import Video from "./Video";
import Footer from "./Footer";
import Mainarea from "./Mainarea";
import PlusImage from "./Plus.js";
import Image from "./Image";
import Header from "./Header";
import "../../css/style.css";

class Index extends Component {
  render() {
    return (
      <div className="overflow">
        <Header />
        <Image />
        <Homecards />
        <Video />
        <Mainarea />
        <PlusImage />
        <Footer />
      </div>
    );
  }
}

export default Index;
