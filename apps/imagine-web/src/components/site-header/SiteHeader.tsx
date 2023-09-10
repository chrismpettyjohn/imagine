import { Link } from 'wouter';
import { Button } from '../button/Button';
import React, { useContext } from 'react';
import { SiteLogo } from '../site-logo/SiteLogo';
import { GuestGuard } from '../guest-guard/GuestGuard';
import { ButtonPrimary, ButtonDanger, ButtonNoBorder } from '../button/Button.remix';
import { ADMIN_URL, UserGuard, configContext, sessionContext } from '@imagine-cms/web';
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
            <Link to="/settings">
              <ButtonNoBorder style={{ padding: 0 }}>
                <i className="fa fa-cog fa-2x" />
              </ButtonNoBorder>
            </Link>
            <Link to="/logout">
              <ButtonNoBorder style={{ color: '#7C0F0F', padding: 0 }}>
                <i className="fa fa-sign-out fa-2x" />
              </ButtonNoBorder>
            </Link>
          </UserGuard>
          <a href={ADMIN_URL}>
            <ButtonDanger>
              Admin Panel
            </ButtonDanger>
          </a>
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
