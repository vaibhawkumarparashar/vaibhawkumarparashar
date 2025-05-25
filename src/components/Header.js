import React from 'react';

const Header = () => {
  return (
    <>
      <div className="sa-menu-style-1">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/logo.png" alt="Logo"
                className="img-fluid" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="current sa-dropdown"><a href="#home"><span><i
                  className="fas fa-home"></i></span>Home</a>
                  <ul className="sa-dropdown-menu">
                    <li><a href="index.html">Home V-1</a></li>
                    <li className="active"><a href="index1.html">Home V-2</a></li>
                  </ul>
                </li>
                <li><a href="#technology"><span><i className="fas fa-briefcase"></i></span>Technology</a></li>
                <li><a href="#resume"><span><i className="fas fa-list-alt"></i></span>Resume</a></li>
                <li><a href="#blog"><span><i className="fab fa-blogger"></i></span>Blog</a></li>
                <li><a href="#contact"><span><i className="fas fa-phone-alt"></i></span>Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;