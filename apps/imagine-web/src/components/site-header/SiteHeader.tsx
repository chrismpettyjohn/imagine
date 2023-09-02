import { Link } from 'wouter';
import React, { useContext } from 'react';
import { SiteLogo } from '../site-logo/SiteLogo';
import { configContext, sessionContext } from '@imagine-cms/web';
import { SiteHeaderActions, SiteHeaderAdminPanelButton, SiteHeaderContent, SiteHeaderElement, SiteHeaderEnterHotelButton, SiteHeaderNavigation } from './SiteHeader.styled';

export function SiteHeader() {
  const { config } = useContext(configContext);
  const { session } = useContext(sessionContext);

  return (
    <SiteHeaderElement>
      <SiteHeaderContent>
        <SiteHeaderNavigation>
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
          </ul>
        </SiteHeaderNavigation>
        <SiteHeaderActions>
          <SiteHeaderAdminPanelButton>
            Admin Panel
          </SiteHeaderAdminPanelButton>
          <Link to="/play">
            <SiteHeaderEnterHotelButton>
              Play Game
            </SiteHeaderEnterHotelButton>
          </Link>
        </SiteHeaderActions>
      </SiteHeaderContent>
    </SiteHeaderElement>
  )
}
