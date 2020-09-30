import React, { Component } from "react";
import axios from "axios";
import "./Auth.css";

export default class Registration extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/users", {
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
    const { name, username, email, password, password_confirmation } = this.state;

    return (
      <div className="form-container sign-up-container">
        <form className="form-auth" onSubmit={this.handleSubmit}>
          <h3 className="form-title">Sign Up</h3>

          <input
            className="input-auth"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            required
          />

          <input
            className="input-auth"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={this.handleChange}
            required
          />

          <input
            className="input-auth"
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <input
            className="input-auth"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <input
            className="input-auth"
            type="password"
            name="password_confirmation"
            placeholder="password confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
            required
          />

          <div className="container-two">
            <button className="form-button-in" type="submit">
              {" "}
              Register{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
