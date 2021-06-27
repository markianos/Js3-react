import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><i className="fas fa-skull-crossbones"></i></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link " aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link " aria-current="page" to="/products">Products</NavLink>
            </li>

            <li className="nav-item me-3 me-lg-0 dropdown">
                <span
                  className="nav-link dropdown-toggle hidden-arrow "
                   id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <ul className="dropdown-menu dropdown-menu-lg-end " aria-labelledby="navbarDropdown">
                  Shoppping Cart
                </ul>
              </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
