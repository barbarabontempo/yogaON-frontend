import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

export default class NewGoalForm extends Component {
  state = {
    pose_name: "",
    description: "",
    user_id: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/pose_goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pose_name: this.state.pose_name,
        description: this.state.description,
        user_id: 1,
      }),
    })
      .then((r) => r.json())
      .then((newGoal) => {
        this.props.onFormSubmit(newGoal);
      });
  };

  render() {
    return (
      <div>
        <h2>New GOAL</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pose_name">Pose Name</label>
          <input
            type="text"
            name="pose_name"
            value={this.state.pose_name}
            onChange={this.handleChange}
          />
      
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
