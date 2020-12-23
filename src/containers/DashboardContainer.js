import React from "react";
import "../auth/Auth.css";
import AllPosesContainer from "./AllPosesContainer";

export default class DashboardContainer extends React.Component {
  render() {
    console.log("inside DB container", this.props.user);
    return (
      <div className="mainpage-container">
        <main>
          <AllPosesContainer user={this.props.user}/>
          <video id="background-video" autoPlay loop>
            <source
              src="https://cdn.dribbble.com/users/1804127/screenshots/11602664/media/58622f5fb307da24d0542e939869a6d8.mp4"
              type="video/mp4"
            />
          </video>
        </main>
      </div>
    );
  }
}
