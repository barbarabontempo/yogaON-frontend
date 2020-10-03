import React from "react";
// higher order component!
import { withRouter } from "react-router-dom";


class DifficultyPicker extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="comp-cont">
        {/* <p>Goals:</p> */}
        <ul className="goal-comp">
          <li
            className={this.props.selectedCompletion === "All" ? "active" : ""}
            onClick={() => this.props.onCompChange("All")}
          >
            All
          </li>
          <li
            className={
              this.props.selectedCompletion === "in progress" ? "active" : ""
            }
            onClick={() => this.props.onCompChange(null)}
          >Pending...</li>
          <li
            className={
              this.props.selectedCompletion === "Done and done!" ? "active" : ""
            }
            onClick={() => this.props.onCompChange(true)}
          >
            DONE!
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(DifficultyPicker);
