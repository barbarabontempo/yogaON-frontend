import React from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import "./PoseShowPg.css";


class PoseShowPage extends React.Component {
  state = {
    pose: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/poses/${id}`)
      .then((r) => r.json())
      .then((pose) => {
        this.setState({
          pose: pose,
        });
      });
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
        <div className="showpg-container">
          <div className="showpg-item">
            <h1>{pose_name} </h1>
          </div>
          <div className="showpg-item">
            <h2>{sanskirt_name} </h2>
          </div>
          <div className="showpg-item">
            <h3>{translation}</h3>
          </div>
          <div className="showpg-item">
            <p>{category} </p>
          </div>
          <div className="showpg-item">
            <p> {difficulty}</p>
          </div>
          <div className="showpg-item">
            <p> {description}</p>
          </div>
          <div className="showpg-item">
            <p>{benefits}</p>
          </div>
          <div className="showpg-item">
            <img src={image_url} alt="no pic" className="img" />
          </div>
          <div className="showpg-item">
            <Iframe
              url={video_url}
              width="550px"
              height="400px"
              id="pg-vid"
              className="vid"
              display="initial"
              position="relative"
            />
          </div>
        </div>
      </>
    );
  }
}

export default PoseShowPage;
