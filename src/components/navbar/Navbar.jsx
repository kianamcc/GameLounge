import React from "react";
import "./Navbar.css";
import logo from "../../assets/gamelounge-logo.png";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="navbar" data-testid="nav">
      <div className="navbar-items">
        <img className="logo" src={logo} alt="" />
        <h2 className="games">Games</h2>
        <h2 className="about">About</h2>
        <h2 className="about">Contact</h2>
        <img className="user" src={user} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
