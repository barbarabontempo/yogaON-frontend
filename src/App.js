import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/Home";
import DashboardContainer from "./containers/DashboardContainer";
import AllPosesPage from "./components/AllPosesPage";
import Meditate from "./meditate/Meditate";
import Navbar from "./nav/Navbar";
import PoseShowPage from "./components/PoseShowPage";
import GoalsContainer from "./containers/GoalsContainer";

export default class App extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.fetchAutologin();
  }

  fetchAutologin = (user) => {
    fetch("http://localhost:3000/autologin", {
      credentials: "include",
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw Error("Not logged in!");
        }
      })
      .then((user) => {
        //set state here instead
        this.setState({ user }, () => {});
        this.props.history.push("/dashboard")
        // this.handleLogin()
      })
      .catch((err) => console.error(err));
  };

  // handleLogin = (user) => {
  //   // set current user, then redirect to home page
  //   this.setState({ user }, () => {
  //     this.props.history.push("/dashboard");
  //   });
  // };

  handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("dik bro", data);
        this.setState({ user: null }, () => {
          this.props.history.push("/");
        });
      });
  };

  render() {
    console.log("user status", this.state);
    return (
      <>
        {this.state.user ? (
          <Navbar handleLogout={this.handleLogout} user={this.state.user} />
        ) : (
          ""
        )}
        <main-stuff>
          <Switch>
            <Route path="/dashboard" exact>
              <DashboardContainer
                handleLogout={this.handleLogout}
                user={this.state.user}
                poses={this.state.poses}
              />
            </Route>

            <Route path="/meditate" exact>
              <Meditate
                handleLogout={this.handleLogout}
                user={this.state.user}
                poses={this.state.poses}
              />
            </Route>

            <Route path="/poses" exact>
              <AllPosesPage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            </Route>

            <Route
              path="/poses/:id"
              render={(routeProps) => {
                return <PoseShowPage match={routeProps.match} />;
              }}
            />

            <Route exact path={"/goals"}>
              <GoalsContainer user={this.state.user} />
            </Route>

            <Route path="/" exact>
              <Home
                handleLogout={this.handleLogout}
                handleLogin={this.fetchAutologin}
                history={this.props.history}
              />
            </Route>
          </Switch>
        </main-stuff>
      </>
    );
  }
}
