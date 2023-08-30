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
          <a>Home</a>
        </li>
        <li>
          <a>News Articles</a>
        </li>
        <li>
          <a>Staff Team</a>
        </li>
        <li>
          <a>High Scores</a>
        </li>
        <li>
          <a>Web Store</a>
        </li>
      </ul>
    </SiteHeaderElement>
  )
}
