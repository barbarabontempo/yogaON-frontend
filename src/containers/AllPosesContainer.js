import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AllPosesContainer extends Component {
  render() {
    // console.log("inside all poses", this.props);
    return (
      <>
        <div className="left-container">
          <h1 className="yoga-head">
            Welcome to yogaON, Barbara!!
          </h1>
          <p className="yoga-par">
            Have you tried to build a yoga habit, just to watch it slowly fade
            away when life starts throwing lemons at you? yogaON is here to help
            you maintain and grow that yoga habit and teach you how to become
            fluent in yoga!
          </p>
          <p className="yoga-par">
            Yoga can be intimidating for beginners, with over 300 known poses it
            can be difficult to decide where to start, but yogaON is here to
            help. Choose from our list of poses to begin benefitting your mind,
            body, and soul with some of yogas most beloved poses. Learn the
            proper sankskirt name and benefits of each pose and also become more
            flexible with a guided video for each pose.
          </p>
          <Link className="pose-link" to="/poses">
            <h2>Let's see some poses!</h2>
          </Link>
        </div>
      </>
    );
  }
}
