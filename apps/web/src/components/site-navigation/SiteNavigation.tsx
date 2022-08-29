import React from 'react';
import {NavDropdown} from 'react-bootstrap';

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
              <a href="/me" className="nav-link ">Homepage <span className="sr-only">(current)</span></a>
            </li>
            <NavDropdown title="Community">
              <NavDropdown.Item href="/community">Community</NavDropdown.Item>
              <NavDropdown.Item href="/community/staff">Staff</NavDropdown.Item>
              <NavDropdown.Item href="/community/leaderboards">Leaderboards</NavDropdown.Item>
              <NavDropdown.Item href="/community/online-players">Online Players</NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <a href="/gallery" className="nav-link ">Gallery</a>
            </li>
            <li className="nav-item">
              <a href="/marketplace" className="nav-link ">Marketplace</a>
            </li>
            <li className="nav-item ">
              <a href="/store" className="nav-link ">Store</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
