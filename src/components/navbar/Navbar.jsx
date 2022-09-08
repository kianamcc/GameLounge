import React from "react";
import "./Navbar.css";
import logo from "../../assets/gamelounge-logo.png";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="navbar" data-testid="nav">
      <div className="navbar-items" data-testid="nav-items">
        <img className="logo" data-testid="logo" src={logo} alt="logo-img" />
        <h3 className="games">Games</h3>
        <h3 className="about">About</h3>
        <h3 className="about">Contact</h3>
        <img className="user" data-testid="user" src={user} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
