import React from 'react';
import { Link } from 'wouter';
import { GuestGuard, UserGuard } from '@imagine-cms/web';

export function SiteNav() {
  return (
    <>
      <GuestGuard>
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
      </GuestGuard>
      <UserGuard>
        <li>
          <Link to="/me">
            Home
          </Link>
        </li>
      </UserGuard>
      <li>
        <Link to="/community">
          Community
        </Link>
      </li>
      <li>
        <Link to="/photos">
          Photos
        </Link>
      </li>
      <li>
        <Link to="/ranks">
          Staff Team
        </Link>
      </li>
      <li>
        <Link to="/community/online-players">
          Online Users
        </Link>
      </li>
      <li>
        <Link to="/community/high-scores">
          High Scores
        </Link>
      </li>
    </>
  )
}