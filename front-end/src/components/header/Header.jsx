import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) setUsername(username);
  }, []);
  const logOut = () => {
    localStorage.removeItem('username')
    navigate("/login")
  };
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
            <li>{username}</li>
            <li onClick={logOut}>Log out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
