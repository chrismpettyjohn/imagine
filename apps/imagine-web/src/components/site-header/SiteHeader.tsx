import React from 'react';
import { Link } from 'wouter';
import { SiteNav } from '../site-nav/SiteNav';
import { SiteLogo } from '../site-logo/SiteLogo';
import { GuestGuard } from '../guest-guard/GuestGuard';
import { ADMIN_URL, ScopeGuard, UserGuard } from '@imagine-cms/web';
import { OnlineUserCount } from '../online-user-count/OnlineUserCount';
import { ToggleThemeButton } from '../toggle-theme-button/ToggleThemeButton';
import { ButtonBrand, ButtonDanger, ButtonNoBorder } from '../button/Button.remix';
import { SiteHeaderActions, SiteHeaderContent, SiteHeaderElement, SiteHeaderImage, SiteHeaderNav, SiteHeaderNavigation, SiteHeaderTools, SiteHeaderWrapper } from './SiteHeader.styled';

export function SiteHeader() {
  return (
    <SiteHeaderWrapper>
      <SiteHeaderImage>
        <SiteHeaderContent>
          <Link to="/login">
            <SiteLogo />
          </Link>
          <SiteHeaderTools>
            <Link to="/play">
              <ButtonNoBorder>
                <b><OnlineUserCount /></b> users online
              </ButtonNoBorder>
            </Link>
          </SiteHeaderTools>
        </SiteHeaderContent>
      </SiteHeaderImage>
      <SiteHeaderElement>
        <SiteHeaderContent>
          <SiteHeaderNavigation>
            <SiteHeaderNav>
              <SiteNav />
            </SiteHeaderNav>
          </SiteHeaderNavigation>
          <SiteHeaderActions>
            <ToggleThemeButton />
            <UserGuard>
              <Link to="/bug-reports">
                <ButtonNoBorder style={{ padding: 0, fontSize: '1.4rem', width: 45 }}>
                  <i className="fa fa-bug" />
                </ButtonNoBorder>
              </Link>
              <Link to="/settings">
                <ButtonNoBorder style={{ padding: 0, fontSize: '1.4rem', width: 45 }}>
                  <i className="fa fa-cog" />
                </ButtonNoBorder>
              </Link>
              <Link to="/logout">
                <ButtonNoBorder style={{ color: '#7C0F0F', padding: 0, fontSize: '1.4rem', width: 45 }}>
                  <i className="fa fa-sign-out" />
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
                <ButtonBrand>
                  Play
                </ButtonBrand>
              </Link>
            </UserGuard>
            <GuestGuard redirect={false}>
              <Link to="/login">
                <ButtonBrand>
                  Login
                </ButtonBrand>
              </Link>
              <Link to="/register">
                <ButtonBrand>
                  Create Account
                </ButtonBrand>
              </Link>
            </GuestGuard>
          </SiteHeaderActions>
        </SiteHeaderContent>
      </SiteHeaderElement >
    </SiteHeaderWrapper>
  )
}
