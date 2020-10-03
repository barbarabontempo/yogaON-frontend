import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewLogForm from "./NewLogForm";

export default class PoseCard extends Component {
  state = {
    logs: [],
  };

  //pose_goals logs

  handleAddLog = (newLog) => {
    this.setState((prevState) => ({
      logs: [newLog, ...prevState.logs],
    }));
  };

  fetchLogs = () => {
    fetch("http://localhost:3000/pose_logs")
      .then((r) => r.json())
      .then((logsArr) => {
        console.log("INSIDE LOGS", logsArr);
        this.setState({
          logs: logsArr,
        });
      });
  };

  componentDidMount() {
    this.fetchLogs();
  }

  handleDoneClick = () => {
    let goalId = this.props.goal.id;
    fetch(`http://localhost:3000/pose_goals/${goalId}`, {
      method: "PATCH",

      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completion: !this.props.goal.completion,
      }),
    })
      .then((r) => r.json())
      .then((newUpdatedGoal) => {
        this.props.handleUpdateGoal(newUpdatedGoal);
      });
  };

  handleDeleteClick = () => {
    let goalId = this.props.goal.id;
    fetch(`http://localhost:3000/pose_goals/${goalId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((resp) => {
        this.props.handleRemoveGoal(resp);
      });
  };

  render() {
    console.log("inside goal card", this.state);
    const { pose_name, description, date, id, user_id } = this.props.goal;

    let poseLogs = this.state.logs.map((log) =>
      log.pose_goal_id === this.props.goal.id ? (
      <li>{log.date}: {log.description}</li>
      ) : null
    );

console.log("THE POSE LOGSZZZ", this.props.goal.id)

    return (
      <li className="gcard">
        <h3 className="gcard-subtitle">My goal: I want to   {description} the {pose_name} pose.</h3>
        <h3 className="gset-on">Set on: {date}</h3>
       

        <ul className="logs-ul">
          <li>My progress:

            {poseLogs} </li>
        </ul>

        <NewLogForm
          goalId={id}
          userId={user_id}
          onFormSubmit={this.handleAddLog}
        />
        <div className="da-btns">
        <button className="done" onClick={this.handleDoneClick}>I did it!</button>
        <button className="delete" onClick={this.handleDeleteClick}>Delete</button>
        </div>
      </li>
    );
  }
}
