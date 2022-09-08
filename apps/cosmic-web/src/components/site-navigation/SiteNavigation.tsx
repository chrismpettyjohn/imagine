import {Link} from 'wouter';
import React, {useContext} from 'react';
import {NavDropdown} from './nav-dropdown/NavDropdown';
import {sessionContext} from '@imagine-cms/web';

export function SiteNavigation() {
  const {session} = useContext(sessionContext);
  return (
    <nav className="navbar navbar-header fixed-top navbar-expand-lg navbar-light bg-light">
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="container navigation">
          <div className="d-flex flex-wrap align-items-center" style={{height: 60}}>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link className="router-link-active router-link-exact-active nav-link selected px-2 link-secondary" to="/me">
                  Me
                </Link>
              </li>
              <NavDropdown
                  label="Community"
                  links={[
                    {
                      label: 'Staff',
                      href: '/community/staff',
                    },
                    {
                      label: 'Highscores',
                      href: '/community/highscores',
                    },
                  ]}
              />
            </ul>
            <div className="login-button">
              <button className="btn btn-light" type="button">Login</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
