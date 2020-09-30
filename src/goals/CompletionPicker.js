import React from "react";
// higher order component!
import { withRouter } from "react-router-dom";


class DifficultyPicker extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="comp-cont">
        <p>Goal status:</p>
        <ul className="goal-comp">
          <li
            className={this.props.selectedCompletion === "All" ? "active" : ""}
            onClick={() => this.props.onCompChange("All")}
          >
            All
          </li>
          <li
            className={
              this.props.selectedCompletion === "Still going strong!" ? "active" : ""
            }
            onClick={() => this.props.onCompChange(null)}
          >
            Still going strong!
          </li>
          <li
            className={
              this.props.selectedCompletion === "Done and done!" ? "active" : ""
            }
            onClick={() => this.props.onCompChange(true)}
          >
            Done and done!
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(DifficultyPicker);
