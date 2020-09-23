import React, { Component } from "react";
import Registration from "../auth/Registration";
import Login from "../auth/Login";
import Overlay from "../auth/Overlay";
import "../auth/Auth.css";
import Quotable from "../components/Quotable"
import '../logo/yogaonlogo.png'

export default class Home extends Component {
  state = {
    rightPanelActive: false,
  };

  handleClickSignUpButton = () =>
    this.setState({
      rightPanelActive: true,
    });

  handleClickSignInButton = () =>
    this.setState({
      rightPanelActive: false,
    });

  handleSuccessfulAuth = (data) => {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  };


  

  render() {
    const { handleClickSignUpButton, handleClickSignInButton } = this;
    const { rightPanelActive } = this.state;

    return (
      <div className="App">
        <img className="login-head" src={require('../logo/yogaonlogo.png')} alt="loading..." />
     
        <div
          className={`container ${
            rightPanelActive ? `right-panel-active` : ``
          }`}
          id="container"
        >
          <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
          <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
          <Overlay
            handleClickSignInButton={handleClickSignInButton}
            handleClickSignUpButton={handleClickSignUpButton}
          />
        </div>
        <Quotable />
      </div>
    );
  }
}
