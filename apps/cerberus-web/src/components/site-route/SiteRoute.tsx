import React from 'react';
import { Route } from 'wouter';
import { SiteRouteProps } from './SiteRoute.types';

export function SiteRoute({ guard: Guard, path, view }: SiteRouteProps) {
  return (
    <Guard redirect>
      <Route path={path} component={view} />
    </Guard>
  )
}