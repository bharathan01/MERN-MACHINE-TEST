import React from "react";
import "./header.css";
import { Link } from "react-router-dom";




function Header() {
  return (
    <div className="main">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className="nav-bar">
        <div className="left-side">
          <ul className="nav-link">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/all-Details">
              <li>Employee List</li>
            </Link>
          </ul>
        </div>
        <div className="right-side">
          <ul className="nav-link">
            <li>User name</li>
            <li>Log out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
