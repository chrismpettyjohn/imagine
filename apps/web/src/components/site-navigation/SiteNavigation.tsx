import React from 'react';

export function SiteNavigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark habboon-nav">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-2 ml-lg-0">
            <li className="nav-item">
              <a href="https://www.habboon.pw/gallery" className="nav-link ">Home</a>
            </li>
            <li className="nav-item">
              <a href="https://www.habboon.pw/gallery" className="nav-link ">Community</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-lg-auto navbar-user-dropdown ml-2 ml-lg-0">
            <li className="nav-item">
              <a href="https://www.habboon.pw/help" className="btn btn-success my-2 my-sm-0 d-none d-lg-block">Help</a>
            </li>
            <li className="nav-item">
              <a href="https://www.habboon.pw/registration"
                 className="btn btn-primary my-2 my-sm-0 ml-2 d-none d-lg-block" id="ga-navbar-register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
