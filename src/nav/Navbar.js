import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
import "../logo/yoganav.png";

const Navbar = (props) => {
  let handleLogoutClick = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log("log out error", error);
      });
  };

  console.log("INSIDE NAVV", props.user);
  return (
    <div>  
      {props.user.name ? (
        <>
      <div className="header-db">
          <div className="logo">
            <Link to="/dashboard">
              <img
                className="login-head-nav"
                style={{ width: "40%" }}
                src={require("../logo/yoganav.png")}
                alt="loading..."
              />
            </Link>
          </div>
          <div className="nav-container">
            <ul className="nav-ul">
              <li>
                <Link to="/poses">Poses</Link>
              </li>
              <li>
                <Link to="/meditate">Meditate</Link>
              </li>
              <li>
                <Link to="/goals">My Goals</Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogoutClick}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </>
      ) : (
        ""
      )}
   
    </div>
  );
};

export default Navbar;
