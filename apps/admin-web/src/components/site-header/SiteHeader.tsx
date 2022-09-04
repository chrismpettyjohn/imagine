import React from 'react';
import {UserDropdown} from './user-dropdown/UserDropdown';

export function SiteHeader() {
  return (
    <nav className="navbar p-0 fixed-top d-flex flex-row">
      <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
        <ul className="navbar-nav navbar-nav-right">
          <UserDropdown />
        </ul>
      </div>
    </nav>
  )
}
