import React, { Component, useEffect } from "react";
import PoseCard from "./PoseCard";
import Aos from "aos"
import "aos/dist/aos.css"


export default function PoseCollection(props) {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])



    let allPoses = props.poses.map((pose) => {
      return (
        <PoseCard
          key={pose.id}
          pose={pose}
          handleUpdatePose={props.handleUpdatePose}
        />
      );
    });
    // console.log("inside collection", this.props);
    return (
      <>

        <ul data-aos="fade-down" className="card-container">{allPoses}</ul>
      </>
    );
  
}
