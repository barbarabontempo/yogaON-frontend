import React, { Component } from "react";
import NewGoalForm from "../goals/NewGoalForm";
import "../goals/Goals.css";
import GoalCollection from "../goals/GoalCollection";
import CompletionPicker from "../goals/CompletionPicker";

export default class GoalsContainer extends Component {
  state = {
    goals: [],
    completion: false,
    selectedCompletion: "All"
  };

  handleAddGoal = (newGoal) => {
    this.setState((prevState) => ({
      goals: [newGoal, ...prevState.goals],
    }));
  };

  fetchGoals = () => {
    fetch("http://localhost:3000/pose_goals")
      .then((r) => r.json())
      .then((goalsArr) => {
        this.setState({
          goals: goalsArr,
        });
      });
  };

  //goalsArr should be showing only the ones for the user thats logged in


  componentDidMount() {
    this.fetchGoals()
  }

  setSelectedComp = (newComp) => {
    this.setState({
      selectedCompletion: newComp,
    });
  };

  handleRemoveGoal = (resp) => {
    this.setState(prevState => ({
      goals: prevState.goals.filter((goal) => goal.id !== resp.id)
    })
    )
  }

  handleUpdateGoal = (newUpdatedGoal) => {
    const updatedGoals = this.state.goals.map(goal => {
      if (goal.id === newUpdatedGoal.id){ 
        const updatedGoal = { ...goal } 
        updatedGoal.completion = newUpdatedGoal.completion 
        return updatedGoal 
      } else { 
        return goal 
      }
    })
    this.setState({ goals: updatedGoals })
  }  


  getFilteredGoals() {
    return this.state.goals
    .filter(
      (goal) =>
        this.state.selectedCompletion === "All" ||
        goal.completion === this.state.selectedCompletion
    )
  }



  render() {
    const filteredGoals = this.getFilteredGoals();

    return (
      <div className="goals-container">
        <h1 className="goal-head"> Turn your goals into actions!</h1>
        <span className="sub-tit">Let's set up some goals! Get started by filling in the blanks below.</span>
        <NewGoalForm
          onFormSubmit={this.handleAddGoal}
          userId={this.props.user.id}
        />
        <CompletionPicker
        selectedCompletion={this.state.selectedCompletion}
        onCompChange={this.setSelectedComp}
         />
        <GoalCollection goals={filteredGoals}
        handleUpdateGoal={this.handleUpdateGoal}
        handleRemoveGoal={this.handleRemoveGoal}
        />
      </div>
    );
  }
}
