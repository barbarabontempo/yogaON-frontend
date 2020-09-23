import React from "react";
import { Link } from "react-router-dom";
import Iframe from 'react-iframe'

class PoseShowPage extends React.Component {

    state = {
        pose: ""
      };
    
      componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://localhost:3000/poses/${id}`)
          .then(r => r.json())
          .then(pose => {
            this.setState({
              pose: pose
            })
          })
      }


  render() {
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
    } = this.state.pose;
    return (
      <>
      <h1>{pose_name} </h1>
      <h2>{sanskirt_name} </h2>
    <h3>{translation}</h3>
    <p>{category} </p>
    <p> {difficulty}</p>
    <p> {description}</p>
    <p>{benefits}</p>
    <img src={image_url} alt="no pic" className="card-media" />
    <Iframe url={video_url}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
</>
    );
  }
}

export default PoseShowPage;
