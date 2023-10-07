import { Link, useLocation } from 'wouter';
import React, { useEffect, useState } from 'react';
import { SiteMobileHeaderElement } from './SiteMobileHeader.styled';
import { ADMIN_URL, GuestGuard, ScopeGuard, UserGuard } from '@imagine-cms/web';
import { ButtonDanger, ButtonNoBorder, ButtonPrimary } from '../button/Button.remix';
import { SiteLogo } from '../site-logo/SiteLogo';
import { GridLarge } from '../grid/Grid.remix';

export function SiteMobileHeader() {
  const [location] = useLocation();
  const [showOnMobile, setShowOnMobile] = useState(false);

  const toggleMobile = () => {
    setShowOnMobile(_ => !_);
  }

  useEffect(() => {
    if (showOnMobile) {
      setShowOnMobile(false);
    }
  }, [location]);

  return (
    <SiteMobileHeaderElement>
      <ul>
        <li onClick={toggleMobile}>
          <SiteLogo />
        </li>
        {
          showOnMobile && (
            <>
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
                <Link to="/community">
                  Community
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
              <UserGuard>
                <li>
                  <Link to="/bug-reports">
                    <ButtonNoBorder style={{ padding: 0 }}>
                      <i className="fa fa-bug fa-2x" />
                    </ButtonNoBorder>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">
                    <ButtonNoBorder style={{ padding: 0 }}>
                      <i className="fa fa-cog fa-2x" />
                    </ButtonNoBorder>
                  </Link>
                </li>
                <li>
                  <Link to="/logout">
                    <ButtonNoBorder style={{ color: '#7C0F0F', padding: 0 }}>
                      <i className="fa fa-sign-out fa-2x" />
                    </ButtonNoBorder>
                  </Link>
                </li>
              </UserGuard>
              <ScopeGuard scope="accessAdminPanel" redirect={false}>
                <li>
                  <a href={ADMIN_URL}>
                    <ButtonDanger>
                      Admin
                    </ButtonDanger>
                  </a>
                </li>
              </ScopeGuard>
              <UserGuard redirect={false}>
                <li>
                  <Link to="/play">
                    <ButtonPrimary>
                      Play
                    </ButtonPrimary>
                  </Link>
                </li>
              </UserGuard>
              <GuestGuard redirect={false}>
                <GridLarge style={{ marginTop: 16 }}>
                  <Link to="/login">
                    <ButtonPrimary>
                      Login
                    </ButtonPrimary>
                  </Link>
                  <Link to="/register">
                    <ButtonDanger>
                      Create Account
                    </ButtonDanger>
                  </Link>
                </GridLarge>
              </GuestGuard>
            </>
          )
        }
      </ul>
    </SiteMobileHeaderElement>
  )
}