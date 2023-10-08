import React from 'react';
import { Link } from 'wouter';
import { GuestGuard, UserGuard } from '@imagine-cms/web';

export function SiteNav() {
  return (
    <>
      <GuestGuard>
        <li>
          <Link to="/login">
            <i className="fa fa-home" style={{ marginRight: 8 }} />
            Login
          </Link>
        </li>
      </GuestGuard>
      <UserGuard>
        <li>
          <Link to="/me">
            <i className="fa fa-home" style={{ marginRight: 8 }} />
            Home
          </Link>
        </li>
      </UserGuard>
      <li>
        <Link to="/community">
          <i className="fa fa-users" style={{ marginRight: 8 }} />
          Community
        </Link>
      </li>
      <li>
        <Link to="/ranks">
          <i className="fa fa-shield" style={{ marginRight: 8 }} />
          Staff Team
        </Link>
      </li>
      <li>
        <Link to="/online-players">
          <i className="fa fa-signal-stream" style={{ marginRight: 8 }} />
          Online Users
        </Link>
      </li>
      <li>
        <Link to="/high-scores">
          <i className="fa fa-trophy" style={{ marginRight: 8 }} />
          High Scores
        </Link>
      </li>
      <li>
        <Link to="/values">
          <i className="fa fa-analytics" style={{ marginRight: 8 }} />
          Values
        </Link>
      </li>
      <li>
        <Link to="/store">
          <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} />
          Store
        </Link>
      </li>
    </>
  )
}