import { Link, useLocation } from 'wouter';
import { SiteNav } from '../site-nav/SiteNav';
import { GridLarge } from '../grid/Grid.remix';
import { SiteLogo } from '../site-logo/SiteLogo';
import React, { useEffect, useState } from 'react';
import { SiteMobileHeaderElement } from './SiteMobileHeader.styled';
import { ADMIN_URL, GuestGuard, ScopeGuard, UserGuard } from '@imagine-cms/web';
import { ButtonDanger, ButtonNoBorder, ButtonBrand } from '../button/Button.remix';

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
              <SiteNav />
              <GridLarge style={{ marginTop: 16 }}>
                <UserGuard>
                  <Link to="/bug-reports">
                    <ButtonNoBorder>
                      <i className="fa fa-bug" style={{ marginRight: 8 }} />
                      Bugs
                    </ButtonNoBorder>
                  </Link>
                  <Link to="/settings">
                    <ButtonNoBorder>
                      <i className="fa fa-wrench" style={{ marginRight: 8 }} />
                      Settings
                    </ButtonNoBorder>
                  </Link>
                </UserGuard>
                <ScopeGuard scope="accessAdminPanel" redirect={false}>
                  <a href={ADMIN_URL} style={{ width: '100%' }}>
                    <ButtonDanger style={{ width: '100%' }}>
                      <i className="fa fa-cog" style={{ marginRight: 8 }} />
                      Admin
                    </ButtonDanger>
                  </a>
                </ScopeGuard>
                <UserGuard>
                  <Link to="/play">
                    <ButtonBrand>
                      <i className="fa fa-users" style={{ marginRight: 8 }} />
                      Play
                    </ButtonBrand>
                  </Link>
                </UserGuard>
              </GridLarge>
              <GuestGuard redirect={false}>
                <GridLarge style={{ marginTop: 16 }}>
                  <Link to="/login">
                    <ButtonBrand>
                      Login
                    </ButtonBrand>
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
    </SiteMobileHeaderElement >
  )
}