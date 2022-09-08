import React from 'react';
import {Link} from 'wouter';
import {GuestGuard} from '../guest-guard/GuestGuard';
import {NavDropdown} from './nav-dropdown/NavDropdown';

export function SiteNavigation() {
  return (
    <nav className="navbar navbar-header fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="container navigation">
          <div className="d-flex flex-wrap align-items-center" style={{height: 60}}>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link className="router-link-active router-link-exact-active nav-link selected px-2 link-secondary" to="/me">
                  Home
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
            <GuestGuard>
              <div className="login-button">
                <button className="btn btn-light" type="button">Login</button>
              </div>
            </GuestGuard>
          </div>
        </div>
      </div>
    </nav>
  )
}
