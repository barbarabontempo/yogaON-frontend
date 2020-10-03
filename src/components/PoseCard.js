import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";



export default function PoseCard(props) {

 


  
    const {
      id,
      pose_name,
      sanskirt_name,
      translation,
      category,
      difficulty,
      description,
      benefits,
      image_url,
      video_url,
      like,
    } = props.pose;

    return (
      <li  className="card">
        <h1 className="card-title">{pose_name}</h1>
        <p className="card-subtitle">{sanskirt_name}</p>

        <Link to={`/poses/${id}`}>
          <img src={image_url} alt="no pic" className="card-media" />
        </Link>
      </li>
    );
  
}
