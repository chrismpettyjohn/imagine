import { Link } from 'wouter';
import React, { useContext } from 'react';
import { configContext, sessionContext } from '@imagine-cms/web';

export function SiteHeader() {
  const { config } = useContext(configContext);
  const { session } = useContext(sessionContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <Link className="navbar-brand" to="/me">
                <img src="https://media.discordapp.net/attachments/1054591061353300090/1090510572480643093/byBk3Xt.png" alt="Logo" className="logo" />
              </Link>
              <li className="nav-item">
                <div id="item" className="text-center">
                  <Link to="/me" className="nav-link button-navbar">
                    <img src="/img/nav/house.png" /> <span id="HOME">HOME</span>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div id="item" className="text-center">
                  <Link to="/community" className="nav-link button-navbar">
                    <img src="/img/nav/community.png" /> <span id="COMMUNITY">COMMUNITY</span>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div id="item" className="text-center">
                  <Link to="/community/articles" className="nav-link button-navbar">
                    <img src="/img/nav/notice.png" /> <span id="NEWS">NEWS</span>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <div id="item" className="text-center">
                  <Link to="/leaderboard/riches" className="nav-link button-navbar" id="dropdown-1" role="button" data-toggle="dropdown">
                    <img src="/img/nav/trophy.png" /> <span id="TOP">TOP</span>
                  </Link>
                </div>
                <div className="dropdown-menu text-left" aria-labelledby="dropdown-1">
                  <div className="dropdown-item"><Link to="/leaderboard/riches"><img src="/img/nav/trophy.png" /> Richest</Link></div>
                  <div className="dropdown-item"><Link to="/leaderboard/activity"><img src="/img/nav/trophy.png" /> Activity</Link></div>
                  <div className="dropdown-item"><Link to="/leaderboard/achievements"><img src="/img/nav/trophy.png" /> Achievements</Link></div>
                  <div className="dropdown-item"><Link to="/leaderboard/games"><img src="/img/nav/trophy.png" /> Games</Link></div>
                  <div className="dropdown-item"><Link to="/leaderboard/countries"><img src="/img/nav/trophy.png" /> Country</Link></div>
                </div>
              </li>
              <li className="nav-item">
                <div id="item" className="text-center">
                  <Link to="/community/staff" className="nav-link button-navbar">
                    <img src="/img/nav/enter-hotel.png" /> <span id="SHOP">STAFF</span>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <div id="item" className="text-center">
                  <Link to="#" className="nav-link button-navbar" id="dropdown-2" role="button" data-toggle="dropdown">
                    <img src="https://4.bp.blogspot.com/-LfIyOMLjPJQ/XZVaFtgE9eI/AAAAAAABWaU/5qN67muLbe0l0bvYjYdjsB0DWwv2pBnKQCKgBGAsYHg/s1600/Icon24.png" /> <span id="TEAM">LANGUAGE</span>
                  </Link>
                </div>
                <div className="dropdown-menu text-left" aria-labelledby="dropdown-2">
                  <div className="dropdown-item"><Link to="/index?lang=es"><img src="https://4.bp.blogspot.com/-LfIyOMLjPJQ/XZVaFtgE9eI/AAAAAAABWaU/5qN67muLbe0l0bvYjYdjsB0DWwv2pBnKQCKgBGAsYHg/s1600/Icon24.png" /> Español</Link></div>
                  <div className="dropdown-item"><Link to="/index?lang=en"><img src="https://4.bp.blogspot.com/-LfIyOMLjPJQ/XZVaFtgE9eI/AAAAAAABWaU/5qN67muLbe0l0bvYjYdjsB0DWwv2pBnKQCKgBGAsYHg/s1600/Icon24.png" /> English</Link></div>
                  <div className="dropdown-item"><Link to="/index?lang=fr"><img src="https://4.bp.blogspot.com/-LfIyOMLjPJQ/XZVaFtgE9eI/AAAAAAABWaU/5qN67muLbe0l0bvYjYdjsB0DWwv2pBnKQCKgBGAsYHg/s1600/Icon24.png" /> Français</Link></div>
                  <div className="dropdown-item"><Link to="/index?lang=de"><img src="https://4.bp.blogspot.com/-LfIyOMLjPJQ/XZVaFtgE9eI/AAAAAAABWaU/5qN67muLbe0l0bvYjYdjsB0DWwv2pBnKQCKgBGAsYHg/s1600/Icon24.png" /> Deustch</Link></div>
                  <div className="dropdown-item"><Link to="/index?lang=tr"><img src="https://4.bp.blogspot.com/-LfIyOMLjPJQ/XZVaFtgE9eI/AAAAAAABWaU/5qN67muLbe0l0bvYjYdjsB0DWwv2pBnKQCKgBGAsYHg/s1600/Icon24.png" /> Turk</Link></div>
                  <div className="dropdown-item"><Link to="/index?lang=pt"><img src="https://4.bp.blogspot.com/-LfIyOMLjPJQ/XZVaFtgE9eI/AAAAAAABWaU/5qN67muLbe0l0bvYjYdjsB0DWwv2pBnKQCKgBGAsYHg/s1600/Icon24.png" /> Português</Link></div>
                </div>
              </li>
              <li className="nav-item mx-1" style={{ borderLeft: '1px solid gray' }}></li>
              <li className="nav-item">
                <div id="item" className="text-center">
                  <Link to="/logout" className="nav-link">
                    <img src="/img/nav/logout.png" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <Link to="/play" id="play" className="btn btn-info mx-2"><img src="/img/nav/go-online.gif" /> <b>Play</b></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
