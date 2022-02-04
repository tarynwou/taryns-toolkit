import React from "react";
import { NavLink } from "react-router-dom";
import "./component.css";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark" id="nav">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Taryn's Tools
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tools">
                  Tools
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/the-box">
                  The Box
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
