import { sessionContext } from '@imagine-cms/web';
import React, { useContext, useState } from 'react';

export function UserDropdown() {
  const { session } = useContext(sessionContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(_ => !_);
  }

  if (!session) {
    return null;
  }

  return (
    <li className="nav-item dropdown">
      <a className="nav-link" href="#" onClick={toggleIsOpen}>
        <div className="navbar-profile">
          <img className="img-xs rounded-circle" src={`https://imager.habboon.pw/?figure=${session.look}&direction=3&head_direction=3&gesture=sml&headonly=1`} loading="lazy" />
          <p className="mb-0 d-none d-sm-block navbar-profile-name">
            {session.username}
          </p>
        </div>
      </a>
      <div className={`dropdown-menu dropdown-menu-right navbar-dropdown preview-list ${isOpen ? 'show' : ''}`}>
        <h6 className="p-3 mb-0">Profile</h6>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item preview-item">
          <div className="preview-thumbnail">
            <div className="preview-icon bg-dark rounded-circle">
              <i className="mdi mdi-settings text-success" />
            </div>
          </div>
          <div className="preview-item-content">
            <p className="preview-subject mb-1">Settings</p>
          </div>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item preview-item">
          <div className="preview-thumbnail">
            <div className="preview-icon bg-dark rounded-circle">
              <i className="mdi mdi-logout text-danger"></i>
            </div>
          </div>
          <div className="preview-item-content">
            <p className="preview-subject mb-1">Log out</p>
          </div>
        </a>
      </div>
    </li>
  )
}
