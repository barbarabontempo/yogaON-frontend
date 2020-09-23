import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AllPosesContainer extends Component {
  render() {
    return (
      <div>
        <Link to="/poses">
          <span>click here to see all the stupid poses</span>
        </Link>
      </div>
    );
  }
}
