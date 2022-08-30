import React, {useContext} from 'react';
import {Link} from 'wouter';
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
              <Link to="/me" className="nav-link">{session?.username ?? 'Home'}</Link>
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
        </div>
      </div>
    </nav>
  )
}
