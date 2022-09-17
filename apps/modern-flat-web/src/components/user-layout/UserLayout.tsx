import React from 'react';
import {UserGuard} from '../user-guard/UserGuard';
import {UserLayoutProps} from './UserLayout.types';
import {SiteHeader} from '../site-header/SiteHeader';
import {SiteFooter} from '../site-footer/SiteFooter';
import {SiteNavigation} from '../site-navigation/SiteNavigation';

export function UserLayout({ children }: UserLayoutProps) {
  return (
    <UserGuard redirect>
      <div style={{height: 'calc(100% - 100px)', width: '100%'}}>
        <SiteHeader />
        <SiteNavigation />
        {children}
      </div>
      <SiteFooter />
    </UserGuard>
  )

}
