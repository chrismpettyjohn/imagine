import React from 'react';
import { Link } from '../../blocks/link/Link';
import { SiteSidebarElement } from './SiteSidebar.styled';

export function SiteSidebar() {
  return (
    <SiteSidebarElement>
      <div className="logo">
        <img src="https://i.imgur.com/WmUQW5O.png" />
      </div>
      <ul>
        <Link href="/dashboard">
          <li>
            <i className="fa fa-home" />
          </li>
        </Link>

        <Link href="/users">
          <li>
            <i className="fa fa-users" />
          </li>
        </Link>
        <Link href="/catalog">

          <li>
            <i className="fa fa-couch" />
          </li>
        </Link>
        <Link href="/articles">
          <li>
            <i className="fa fa-newspaper" />
          </li>
        </Link>
        <Link href="/reports">
          <li>
            <i className="fa fa-flag" />
          </li>
        </Link>
        <Link href="/permissions">
          <li>
            <i className="fa fa-shield" />
          </li>
        </Link>
        <Link href="/configuration">
          <li>
            <i className="fa fa-cog" />
          </li>
        </Link>
      </ul>
    </SiteSidebarElement>
  )
}