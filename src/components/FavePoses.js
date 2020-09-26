import React from "react";
import PoseCard from "./PoseCard";

class FavePoses extends React.Component {
  //ADD MAP TO THIS FUNCTION , IF ERROR PUT this,props.favs into  A VARIABLE
  //   renderFavs = () => {
  //     return this.props
  //       .favs()
  //       .map((pose) => (
  //         <PoseCard
  //           key={pose.id}
  //           recipe={pose}
  //           user = {this.props.user}
  //         //   handleUpdatePose={this.props.handleUpdatePose
  //         />
  //       ));
  //   };

  render() {
    console.log("FAVS", this.props);
    return (
      <div>
        <h1>My Favs:</h1>
      </div>
    );
  }
}

export default FavePoses;
