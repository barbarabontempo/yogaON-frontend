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
          <h1 className="head-child">{sanskirt_name} </h1>
          <h3 className="head-tran">Translation: {translation}</h3>
          <h1 className="head-child-eng">{pose_name} </h1>

          
          <div className="media">
            <img src={image_url} alt="no pic" className="showpg-img" />

            <Iframe
              url={video_url}
              width="600px"
              height="300px"
              id="pg-vid"
              className="show-vid"
              display="initial"
              position="relative"
            />
          </div>
       

        <div className="diff-cat">
        <p className="diff">
          {" "}
          <span>Difficulty: </span> 
          {difficulty}
        </p>
        <p className="category">
          <span>Category: </span>{" "}
          {category}
        </p>
 </div>

<div className="deets"> 
        <p className="desc">
          {" "}
          
          <span>Description </span>
          <p className="diffy">
            
          {description}
          </p>
        </p>
        <p className="benefits">
        <span>Benefits </span>
        <p className="diffy">

          {benefits}
        </p>
        </p>
        </div>


        </div>
      </>
    );
  }
}

export default PoseShowPage;
