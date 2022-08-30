import React from 'react';
import {Link} from 'wouter';
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
              <Link to="/me" className="nav-link ">Homepage <span className="sr-only">(current)</span></Link>
            </li>
            <NavDropdown title="Community">
              <Link to="/community">
                <NavDropdown.Item>Community</NavDropdown.Item>
              </Link>
              <Link to="/community/staff">
                <NavDropdown.Item>Staff</NavDropdown.Item>
              </Link>
              <Link to="/community/leaderboards">
                <NavDropdown.Item>Leaderboards</NavDropdown.Item>
              </Link>
              <Link to="/community/online-players">
                <NavDropdown.Item>Online Players</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link ">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/marketplace" className="nav-link ">Marketplace</Link>
            </li>
            <li className="nav-item ">
              <Link to="/store" className="nav-link ">Store</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
