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
    registrationErrors: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3000/registrations",
        { user: this.state },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="form-container sign-up-container">
        <form className="form-auth" onSubmit={this.handleSubmit}>
          <h3 className="form-title">Sign Up</h3>

          <input
            className="input-auth"
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />

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
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
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

          <input
            className="input-auth"
            type="password"
            name="password_confirmation"
            placeholder="password confirmation"
            value={this.state.password_confirmation}
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