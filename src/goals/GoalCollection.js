import React, { Component } from "react";
import GoalCard from "./GoalCard";

export default class GoalCollection extends Component {
  render() {
    let allGoals = this.props.goals.map((goal) => {
      return (
        <GoalCard
          handleUpdateGoal={this.props.handleUpdateGoal}
          handleRemoveGoal={this.props.handleRemoveGoal}
          key={goal.id}
          goal={goal}
        />
      );
    });

    console.log("goal collection", this.props.goals);
    return (
      <div>
        <h1>Goal collection</h1>
        <ul className="card-container">{allGoals}</ul>
      </div>
    );
  }
}
