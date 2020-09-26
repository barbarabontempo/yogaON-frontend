import React from "react";
// higher order component!
import { withRouter } from "react-router-dom";
import "./AllPoses.css";

class DifficultyPicker extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="diff-cont">
        <p>Difficulty:</p>
        <ul className="pose-diff">
          <li
            className={this.props.selectedDifficulty === "All" ? "active" : ""}
            onClick={() => this.props.onDifficultyChange("All")}
          >
            All
          </li>
          <li
            className={
              this.props.selectedDifficulty === "Beginner" ? "active" : ""
            }
            onClick={() => this.props.onDifficultyChange("Beginner")}
          >
            Beginner
          </li>
          <li
            className={
              this.props.selectedDifficulty === "Intermediate" ? "active" : ""
            }
            onClick={() => this.props.onDifficultyChange("Intermediate")}
          >
            Intermediate
          </li>
          <li
            className={
              this.props.selectedDifficulty === "Expert" ? "active" : ""
            }
            onClick={() => this.props.onDifficultyChange("Expert")}
          >
            Expert
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(DifficultyPicker);
