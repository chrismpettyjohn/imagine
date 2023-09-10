import React from 'react';
import { SiteSidebarElement } from './SiteSidebar.styled';
import { Link } from 'wouter';

export function SiteSidebar() {
  return (
    <SiteSidebarElement>
      <div className="logo">
        <img src="https://i.imgur.com/WmUQW5O.png" />
      </div>
      <ul>
        <Link to="/dashboard">
          <li>
            <i className="fa fa-home" />
          </li>
        </Link>

        <Link to="/users">
          <li>
            <i className="fa fa-users" />
          </li>
        </Link>
        <Link to="/catalog">

          <li>
            <i className="fa fa-couch" />
          </li>
        </Link>
        <Link to="/articles">
          <li>
            <i className="fa fa-newspaper" />
          </li>
        </Link>
        <Link to="/reports">
          <li>
            <i className="fa fa-flag" />
          </li>
        </Link>
        <Link to="/permissions">
          <li>
            <i className="fa fa-shield" />
          </li>
        </Link>
        <Link to="/configuration">
          <li>
            <i className="fa fa-cog" />
          </li>
        </Link>
      </ul>
    </SiteSidebarElement>
  )
}