import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./AllPoses.css";
import PoseCollection from "./PoseCollection";
import FavePoses from "./FavePoses";

export default class AllPosesPage extends Component {
  state = {
    poses: [],
    searchTerm: ""
  };

  componentDidMount() {
    this.getPoses();
  }

  getPoses() {
    fetch("http://localhost:3000/poses")
      .then((response) => response.json())
      .then((poseData) => {
        this.setState({
          poses: poseData,
        });
      });
  }


  handleSearchChange = (searchTerm) => {
    this.setState({ searchTerm });
  };



  getFilteredPoses() {
    return this.state.poses
      .filter(pose =>
        // filter by searchTerm
        pose.pose_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
  }
  
  render() {

  const filteredPoses = this.getFilteredPoses()


    return (
      <>
     
        <div className="all-poses">
          <h2> POSES </h2>
        <Search searchTerm={this.searchTerm} handleSearchChange={this.handleSearchChange}/>
        

        <Link to="/favorites"><span>Favorites</span></Link>


          <PoseCollection handleUpdatePose={this.handleUpdatePose} poses={filteredPoses} />
        </div>
      </>
    );
  }
}
