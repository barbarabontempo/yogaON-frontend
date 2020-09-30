//assocaite the log with which ever goal
//log needs to know which goal its assocaited with 


import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

export default class NewLogForm extends Component {
  state = {
    description: "",
    pose_goal_id: "",
    image: "",
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
    fetch("http://localhost:3000/pose_logs", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pose_name: this.state.pose_name,
        description: this.state.description,
        pose_goal_id: this.props.goalId,
        user_id: this.props.userId
      }),
    })
      .then((r) => r.json())
      .then((newLog) => {
        this.props.onFormSubmit(newLog);
      });
  };

  render() {

    return (
      <div>
        <h2>New LOG</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <label htmlFor="pose_name">Image: </label>
          <input
            type="text"
            name="image"
            value={this.state.pose_name}
            onChange={this.handleChange}
          />
      

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
