import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="sa-menu-style-1">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="assets/images/logo.png" alt="Logo"
                className="img-fluid" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="sa-dropdown">
                  <Link to="/"><span><i className="fas fa-home"></i></span>Home</Link>
                </li>
                <li>
                  <Link to="/about"><span><i className="fas fa-user"></i></span>About</Link>
                </li>
                <li>
                  <Link to="/resume"><span><i className="fas fa-list-alt"></i></span>Resume</Link>
                </li>
                <li>
                  <Link to="/contact"><span><i className="fas fa-phone-alt"></i></span>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;