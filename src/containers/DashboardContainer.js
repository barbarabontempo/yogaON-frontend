import React from "react";
import "../auth/Auth.css";
import Navbar from "../nav/Navbar";
import AllPosesPage from "../components/AllPosesPage"
import AllPosesContainer from "./AllPosesContainer";

export default class DashboardContainer extends React.Component {

  


  render() {
    console.log("inside DB container")
    return (
      <div className="mainpage-container">
        <header>
          {/* <Navbar /> */}
        </header>
        <main>
            {/* <AllPoses poses={this.props.poses}/> */}
            <AllPosesContainer />
            <video id="background-video" autoPlay loop>
              <source
                src="https://static.dribbble.com/users/1804127/screenshots/11602664/media/2e9b09d0bb78593263e427b31f15a76c.mp4"
                type="video/mp4"
              />
            </video>
         
        </main>
      </div>
    );
  }
}
