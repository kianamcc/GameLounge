import React from "react";
import "./Navbar.css";
import logo from "../../assets/gamelounge-logo.png";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="navbar" data-testid="nav">
      <div className="navbar-items" data-testid="nav-items">
        <img
          className="navbar-logo"
          data-testid="logo"
          src={logo}
          alt="logo-img"
        />
        <h3 className="navbar-games">Games</h3>
        <h3 className="navbar-about">About</h3>
        <h3 className="navbar-contact">Contact</h3>
        <img className="navbar-user" data-testid="user" src={user} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
