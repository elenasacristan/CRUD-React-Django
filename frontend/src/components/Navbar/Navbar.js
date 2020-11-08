import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="logo-incling" width="120" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
       <i className="fa fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Tiles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="add-tile nav-link" to="tile/add/">
              Add tile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
