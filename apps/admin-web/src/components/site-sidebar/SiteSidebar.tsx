import React from 'react';
import {Link} from 'wouter';
import {NavDropdown} from '../nav-dropdown/NavDropdown';

export function SiteSidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo text-white" href="/dashboard">
          ImagineASE
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item nav-category">
          <span className="nav-link">Navigation</span>
        </li>
        <li className="nav-item menu-items">
          <Link className="nav-link" to="/dashboard">
            <span className="menu-icon">
              <i className="fas fa-home" />
            </span>
            <span className="menu-title">
              Dashboard
            </span>
          </Link>
        </li>
        <NavDropdown
          icon="fas fa-cogs"
          label="Settings"
          links={[
            {
              label: 'Site Settings',
              path: '/settings/site',
            },
            {
              label: 'Word Filter',
              path: '/settings/word-filter',
            },
          ]}
        />
        <NavDropdown
          icon="fas fa-newspaper"
          label="Articles"
          links={[
            {
              label: 'Articles',
              path: '/articles/list',
            },
          ]}
        />
        <NavDropdown
          icon="fa fa-users"
          label="Users"
          links={[
            {
              label: 'Users',
              path: '/users/list',
            },
            {
              label: 'Bans',
              path: '/bans/list',
            },
            {
              label: 'Chatlog',
              path: '/chatlog/list',
            },
          ]}
        />
      </ul>
    </nav>
  )
}
