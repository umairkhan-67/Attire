// Navbar.jsx
import React from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';
const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark-custom" style={{ backgroundColor: "black", color: "white" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Umair Khan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link className="nav-link" to = "/">Home</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to = "/about">About us</Link>
            </li>
            <li className="nav-item dropdown me-3">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Products
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;