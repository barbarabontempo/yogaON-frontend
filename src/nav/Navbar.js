import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";

export default function Navbar() {
  let handleLogoutClick = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log("log out error", error);
      });
  };

  return (
    <>
      <Link to="/dashboard">
        <span> yogaON</span>
      </Link>

      <Link to="/poses">
        <span>Poses </span>
      </Link>

      <Link to="/meditate">
        <span>Meditate </span>
      </Link>

      <Link to="/" onClick={handleLogoutClick}>
        <span>Logout</span>
      </Link>
    </>
  );
}
