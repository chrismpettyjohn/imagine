import React from 'react';
import {Link} from 'wouter';
import {UserGuard} from '../user-guard/UserGuard';
import {LoginModal} from '../login-modal/LoginModal';
import {GuestGuard} from '../guest-guard/GuestGuard';
import {NavDropdown} from './nav-dropdown/NavDropdown';
import {CurrencyStats} from './currency-stats/CurrencyStats';

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
                      href: '/community/leaderboards',
                    },
                  ]}
              />
            </ul>
            <UserGuard>
              <CurrencyStats />
              <div className="login-button">
                <Link to="/logout">
                 <button className="btn btn-light" type="button">Logout</button>
                </Link>
              </div>
            </UserGuard>
            <GuestGuard>
              <LoginModal />
            </GuestGuard>
          </div>
        </div>
      </div>
    </nav>
  )
}
