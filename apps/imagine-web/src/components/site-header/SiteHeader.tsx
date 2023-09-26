import React from 'react';
import { Link } from 'wouter';
import { SiteLogo } from '../site-logo/SiteLogo';
import { GuestGuard } from '../guest-guard/GuestGuard';
import { ADMIN_URL, ScopeGuard, UserGuard } from '@imagine-cms/web';
import { ButtonPrimary, ButtonDanger, ButtonNoBorder } from '../button/Button.remix';
import { SiteHeaderActions, SiteHeaderContent, SiteHeaderElement, SiteHeaderNavigation } from './SiteHeader.styled';
import { ToggleThemeButton } from '../toggle-theme-button/ToggleThemeButton';

export function SiteHeader() {
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
                News
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
              <Link to="/radio">
                Radio
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
          </ul>
        </SiteHeaderNavigation>
        <SiteHeaderActions>
          <ToggleThemeButton />
          <UserGuard>
            <Link to="/bug-reports">
              <ButtonNoBorder style={{ padding: 0 }}>
                <i className="fa fa-bug fa-2x" />
              </ButtonNoBorder>
            </Link>
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
          <ScopeGuard scope="accessAdminPanel" redirect={false}>
            <a href={ADMIN_URL}>
              <ButtonDanger>
                Admin
              </ButtonDanger>
            </a>
          </ScopeGuard>
          <UserGuard redirect={false}>
            <Link to="/play">
              <ButtonPrimary>
                Play
              </ButtonPrimary>
            </Link>
          </UserGuard>
          <GuestGuard redirect={false}>
            <Link to="/login">
              <ButtonPrimary>
                Login
              </ButtonPrimary>
            </Link>
            <Link to="/register">
              <ButtonPrimary>
                Create Account
              </ButtonPrimary>
            </Link>
          </GuestGuard>
        </SiteHeaderActions>
      </SiteHeaderContent>
    </SiteHeaderElement >
  )
}
