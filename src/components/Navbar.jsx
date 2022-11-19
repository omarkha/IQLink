import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-bs-controls="navbarTogglerDemo03"
          aria-bs-expanded="false"
          aria-bs-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <h3>IQLink</h3>
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <input id="nav-searchbar" type="text" placeholder="Search IQLink" />
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Teams
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Training
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
          </ul>
          <ul id="right-nav" className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Settings
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
