import {Link} from 'wouter';
import React, {useContext} from 'react';
import {NavDropdown} from 'react-bootstrap';
import {sessionContext} from '../../context/session/SessionContext';

export function SiteNavigation() {
  const {session} = useContext(sessionContext);
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
              <Link to={session ? '/me' : '/login'} className="nav-link">{session?.username ?? 'Home'}</Link>
            </li>
            <li className="nav-item">
              <Link to="/community" className="nav-link">Community</Link>
            </li>
            <li className="nav-item">
              <Link to="/community/staff" className="nav-link">Staff</Link>
            </li>
            <li className="nav-item">
              <Link to="/community/leaderboards" className="nav-link">Leaderboards</Link>
            </li>
            <li className="nav-item">
              <Link to="/community/online-players" className="nav-link">Online Players</Link>
            </li>
          </ul>
          {
            session && (
              <ul className="navbar-nav ml-lg-auto navbar-user-dropdown ml-2 ml-lg-0">
                <NavDropdown title={<img className="avatar d-none d-lg-inline-block pt-2" src={`https://imager.habboon.pw/?figure=${session.look}&size=m&direction=4&head_direction=4&gesture=sml&headonly=1`} />} id="user-tools">
                  <Link to="/settings">
                    <NavDropdown.Item>Account Settings</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/logout">
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </ul>
            )
          }
        </div>
      </div>
    </nav>
  )
}
