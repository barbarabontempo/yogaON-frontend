import React from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
import "../logo/yoganav.png";

const Navbar = (props) => {
console.log("navbar ", props)
  return (
    <div>  

        <>
      <div className="header-db">
          <div className="logo">
            <Link to="/">
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
                <NavLink to="/poses">Poses</NavLink>
              </li>
              <li>
                <NavLink to="/meditate">Meditate</NavLink>
              </li>
              <li>
                <NavLink to="/goals">Goals</NavLink>
              </li>
              <li>
                
                <Link to="/" onClick={props.handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </>
    
      
   
    </div>
  );
};

export default Navbar;
