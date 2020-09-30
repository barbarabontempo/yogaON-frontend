import React, { Component } from "react";
import axios from "axios";
import "./Auth.css";

export default class Registration extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((r) => r.json())
      .then((user) => {
       
        this.props.handleLogin(user);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="form-container sign-in-container">
        <form className="form-auth" onSubmit={this.handleSubmit}>
          <div className="login-form-header">
            <h2 className="form-title">Login</h2>
          </div>

          <input
            className="input-auth"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <input
            className="input-auth"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className="container-two">
            <button className="form-button-in" type="submit">
              {" "}
              Login{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
