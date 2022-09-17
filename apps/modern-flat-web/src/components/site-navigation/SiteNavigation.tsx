import {Link} from 'wouter';
import React, {useContext} from 'react';
import {UserGuard} from '../user-guard/UserGuard';
import {configContext, sessionContext} from '@imagine-cms/web';

export function SiteNavigation() {
  const {config} = useContext(configContext);
  const {session} = useContext(sessionContext);

  if (!session) {
    return null;
  }

  return (
    <div id="header-menu">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <UserGuard>
              <ul className="user-menu">
                <li>
                  <Link to="/me">
                    <div className="user-avatar-menu" style={{backgroundImage: `url(https://imager.habboon.pw/?figure=${session.user.look}&head_direction=3&gesture=sml)`}} />
                    {session.user.username}
                    <span>
                      <i className="far fa-angle-down" />
                    </span>
                  </Link>
                  <ul className="user-subnavi">
                    <li>
                      <Link to={`/profile/${session.user.username}`}>My Profile</Link>
                    </li>
                    <li>
                      <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </UserGuard>
          </div>
          <div className="col-2">
            <Link to="/" className="logo" />
          </div>
          <div className="col-5">
            <ul className="navigation">
              <li>
                <Link to="/community">
                  Community
                  <span>
                      <i className="far fa-angle-down" />
                    </span>
                </Link>
                <ul className="subnavi">
                  <li>
                    <Link to="/community/news">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link to="/community/staff">
                      Staff Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/community/photos">
                      Photos
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
