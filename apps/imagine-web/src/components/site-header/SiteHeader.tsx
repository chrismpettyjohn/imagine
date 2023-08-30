import { Link } from 'wouter';
import React, { useContext } from 'react';
import { SiteLogo } from '../site-logo/SiteLogo';
import { SiteHeaderElement } from './SiteHeader.styled';
import { configContext, sessionContext } from '@imagine-cms/web';

export function SiteHeader() {
  const { config } = useContext(configContext);
  const { session } = useContext(sessionContext);

  return (
    <SiteHeaderElement>
      <SiteLogo />
      <ul>
        <li>
          <Link to="/me">
            Home
          </Link>
        </li>
        <li>
          <Link to="/community/articles">
            News Articles
          </Link>
        </li>
        <li>
          <Link to="/community/staff">
            Staff Team
          </Link>
        </li>
        <li>
          <Link to="/community/online-players">
            Online Players
          </Link>
        </li>
        <li>
          <Link to="/community/high-scores">
            High Scores
          </Link>
        </li>
        <li>
          <Link to="/web-store">
            Web Store
          </Link>
        </li>
      </ul>
    </SiteHeaderElement>
  )
}
