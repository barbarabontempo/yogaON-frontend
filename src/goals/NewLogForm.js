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
      this.setState(({
        description: ""
       }))
  };

  render() {

    return (
      <div>
        <h2>Track your progress!</h2>
        <form className="log-form" onSubmit={this.handleSubmit}>
    
          <input
            type="text"
            name="description"
            placeholder="How was your practice?"
            value={this.state.description}
            onChange={this.handleChange}
          />

          {/* <label htmlFor="pose_name">Image: </label>
          <input
            type="text"
            name="image"
            value={this.state.pose_name}
            onChange={this.handleChange}
          /> */}
      

          <input type="submit" value="≫" />
        </form>
      </div>
    );
  }
}
