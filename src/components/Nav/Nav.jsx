import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
class Nav extends Component {
  render() {
    return (
      <div id="containerNav">
        <Link to="/" className="link" id="home">
          Home
        </Link>
        <Link to="/house/create" className="link" id="createHouse">
          Create House
        </Link>
      </div>
    );
  }
}

export default Nav;
