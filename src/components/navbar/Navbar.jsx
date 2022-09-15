import React from "react";
import "./Navbar.css";
import logo from "../../assets/gamelounge-logo.png";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";

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
        <Link className="navbar-games" to="/">
          <h3>Games</h3>
        </Link>
        <Link className="navbar-about" to="/">
          <h3>About</h3>
        </Link>
        <Link className="navbar-contact" to="/">
          <h3>Contact</h3>
        </Link>
        <img className="navbar-user" data-testid="user" src={user} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
