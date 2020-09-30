import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./AllPoses.css";
import PoseCollection from "./PoseCollection";
import FavePoses from "./FavePoses";
import DifficultyPicker from "./DifficultyPicker";

export default class AllPosesPage extends Component {
  state = {
    poses: [],
    searchTerm: "",
    selectedDifficulty: "All",
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


  setSelectedDiff = (newDifficulty) => {
    this.setState({
      selectedDifficulty: newDifficulty,
    });
  };

  getFilteredPoses() {
    return this.state.poses
      .filter(
        (pose) =>
          // filter by category
          this.state.selectedDifficulty === "All" ||
          pose.difficulty === this.state.selectedDifficulty
      )
      .filter((pose) =>
        // filter by searchTerm
        pose.pose_name
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
      );
  }

  render() {
    const filteredPoses = this.getFilteredPoses();

    return (
      <>
        <div className="all-poses">
      <div className="search-cont"> 
      
          {/* <h2> POSES </h2> */}
          <Search
            searchTerm={this.searchTerm}
            handleSearchChange={this.handleSearchChange}
          />
          <DifficultyPicker
            selectedDifficulty={this.state.selectedDifficulty}
            onDifficultyChange={this.setSelectedDiff}
          />
</div>
          <PoseCollection
            handleUpdatePose={this.handleUpdatePose}
            poses={filteredPoses}
          />
        </div>
      </>
    );
  }
}
