import React from 'react';
import { Link } from '../../blocks/link/Link';
import { SITE_URL, ScopeGuard } from '@imagine-cms/web';
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
        <ScopeGuard scope="manageUsers" redirect={false}>
          <Link href="/users">
            <li>
              <i className="fa fa-users" />
            </li>
          </Link>
        </ScopeGuard>
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
        <ScopeGuard scope="managePermissions" redirect={false}>
          <Link href="/permissions">
            <li>
              <i className="fa fa-shield" />
            </li>
          </Link>
        </ScopeGuard>
        <Link href="/configuration">
          <li>
            <i className="fa fa-cog" />
          </li>
        </Link>
      </ul>
      <footer>
        <ul>
          <a href={SITE_URL}>
            <li>
              <i className="fa fa-external-link" />
            </li>
          </a>
        </ul>
        <div>
          <b>Cerberus</b>
          <div>
            by&nbsp;<b>LeChris</b>
          </div>
        </div>
      </footer>
    </SiteSidebarElement>
  )
}