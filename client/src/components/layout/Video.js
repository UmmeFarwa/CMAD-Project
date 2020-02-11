import React from "react";
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import "../../css/style.css";
export default props => {
  return (
    <div className="player-wrapper">
      <Player
        autoPlay
        muted
        width="100%"
        height="100%"
        fluid={false}
        className="react-player"
      >
        <source src = "https://a0.muscache.com/v/69/c4/69c4af4b-a86e-4290-a25d-5d6bf1e010ba/3ebc6e5bcdfe53a6a744937cc23b784a_1500k_2.mp4"/>
      </Player>
    </div>
  );
};
