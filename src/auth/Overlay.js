import React, { Component } from "react";
import "./Auth.css";

class Overlay extends Component {
  render() {
    const { handleClickSignUpButton, handleClickSignInButton } = this.props;
    return (
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p className="overlay-description">Happy to see you 🧘🏻‍♀️</p>
            <button
              className="ghost form-button"
              id="signIn"
              onClick={handleClickSignInButton}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p className="overlay-description">
              First time here? Sign up today and let's get our yoga on!
            </p>
            <button
              className="ghost form-button"
              id="signUp"
              onClick={handleClickSignUpButton}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;
