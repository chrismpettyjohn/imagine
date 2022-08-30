import React from 'react';
import {Route} from 'react-router-dom';
import {ProtectedRouteProps} from './ProtectedRoute.types';

export function ProtectedRoute({path, guard, view}: ProtectedRouteProps) {
  const [Guard, View] = [guard, view]
  return <Route element={<Guard><View /></Guard>} path={path} />
}
