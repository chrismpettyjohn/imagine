import { Link } from 'wouter';
import { Button } from '../button/Button';
import React, { useContext } from 'react';
import { SiteLogo } from '../site-logo/SiteLogo';
import { GuestGuard } from '../guest-guard/GuestGuard';
import { ButtonPrimary, ButtonDanger, ButtonNoBorder } from '../button/Button.remix';
import { UserGuard, configContext, sessionContext } from '@imagine-cms/web';
import { SiteHeaderActions, SiteHeaderContent, SiteHeaderElement, SiteHeaderNavigation } from './SiteHeader.styled';

export function SiteHeader() {
  const { config } = useContext(configContext);
  const { session } = useContext(sessionContext);

  return (
    <SiteHeaderElement>
      <SiteHeaderContent>
        <SiteHeaderNavigation>
          <SiteLogo />
          <ul>
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
          <UserGuard>
            <Link to="/logout">
              <ButtonNoBorder>
                Logout
              </ButtonNoBorder>
            </Link>
          </UserGuard>
          <ButtonDanger>
            Admin Panel
          </ButtonDanger>
          <Link to="/play">
            <ButtonPrimary>
              Play Game
            </ButtonPrimary>
          </Link>
        </SiteHeaderActions>
      </SiteHeaderContent>
    </SiteHeaderElement >
  )
}
