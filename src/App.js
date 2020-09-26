import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import DashboardContainer from "./containers/DashboardContainer";
import AllPosesPage from "./components/AllPosesPage";
import Meditate from "./meditate/Meditate";
import axios from "axios";
import Navbar from "./nav/Navbar";
import PoseShowPage from "./components/PoseShowPage";
import FavePoses from "./components/FavePoses";
import GoalsContainer from "./containers/GoalsContainer";
import NewGoalForm from "./goals/NewGoalForm";

export default class App extends React.Component {
  state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
    goals: [],
  };

  checkLoginStatus = () => {
    axios
      .get("http://localhost:3000/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "Online",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log("logged in error?", error);
      });
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "online",
      user: data.user,
    });
  };

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  };

  render() {
    return (
      <>
        <Navbar
          handleLogout={this.handleLogout}
          user={this.state.user}
        />

        <main-stuff>
          <Switch>
            <Route path="/dashboard" exact>
              <DashboardContainer
                loggedInStatus={this.state.loggedInStatus}
                handleLogout={this.handleLogout}
                user={this.state.user}
                poses={this.state.poses}
              />
            </Route>

            <Route path="/meditate" exact>
              <Meditate
                loggedInStatus={this.state.loggedInStatus}
                handleLogout={this.handleLogout}
                user={this.state.user}
                poses={this.state.poses}
              />
            </Route>

            <Route path="/poses" exact>
              <AllPosesPage
                loggedInStatus={this.state.loggedInStatus}
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

            <Route exact path={"/favorites"}>
              <FavePoses user={this.state.user} />
            </Route>

            <Route exact path={"/goals"}>
              <GoalsContainer user={this.state.user} />
            </Route>

            {/* <Route exact path={"/goals/new"}>
              <NewGoalForm user={this.state.user}
              onFormSubmit={this.handleAddGoal} 
              />

            </Route> */}

            {/* <Route path="/favorites">
              <ListingContainer
                listings={this.state.listings}
                onUpdateListing={this.handleUpdateListing}
                searchTerm={this.state.searchTerm}
                onlyFavorites={true}
                onPageChange={this.handlePageChange}
              />
            </Route> */}

            <Route path="/" exact>
              <Home
                loggedInStatus={this.state.loggedInStatus}
                handleLogout={this.handleLogout}
                handleLogin={this.handleLogin}
                history={this.props.history}
              />
            </Route>
          </Switch>
        </main-stuff>
      </>
    );
  }
}






