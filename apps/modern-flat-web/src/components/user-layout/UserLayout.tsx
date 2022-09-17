import React from 'react';
import {UserGuard} from '../user-guard/UserGuard';
import {UserLayoutProps} from './UserLayout.types';
import {SiteHeader} from '../site-header/SiteHeader';
import {SiteFooter} from '../site-footer/SiteFooter';
import {SiteNavigation} from '../site-navigation/SiteNavigation';

export function UserLayout({ children }: UserLayoutProps) {
  return (
    <UserGuard redirect>
      <SiteHeader />
      <SiteNavigation />
      {children}
      <SiteFooter />
    </UserGuard>
  )

}
