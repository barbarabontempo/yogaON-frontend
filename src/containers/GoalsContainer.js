import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewGoalForm from "../goals/NewGoalForm";

export default class GoalsContainer extends Component {
  state = {
    goals: []
  };
  
  handleAddPose = (newGoal) => {
    this.setState((prevState) => ({
      goals: [newGoal, ...prevState.goals],
    }));
  };
  //componentDidMount
  //all the goals in state, fetch all of them, two diffarrays from goals array via filter, goals.completed.filter
  render() {
    
    return (
      <div>
        <header>
          {/* <Link to="/goals/new">
            <button>Create Goal</button>
          </Link> */}
        </header>
        <h1>Goals</h1>
        <NewGoalForm onFormSubmit={this.handleAddPose} userId={this.props.user.id}/>

      </div>
    );
  }
}
