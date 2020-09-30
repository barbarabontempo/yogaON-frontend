import React, { Component } from "react";
import PoseCard from "./PoseCard";

export default class PoseCollection extends Component {
  render() {
    let allPoses = this.props.poses.map((pose) => {
      return (
        <PoseCard
          key={pose.id}
          pose={pose}
          handleUpdatePose={this.props.handleUpdatePose}
        />
      );
    });
    // console.log("inside collection", this.props);
    return (
      <>

        <ul className="card-container">{allPoses}</ul>
      </>
    );
  }
}
