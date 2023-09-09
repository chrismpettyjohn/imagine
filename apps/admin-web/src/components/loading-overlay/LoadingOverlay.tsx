import React from 'react';
// @ts-ignore - There are no valid types for this lib
import { LoadingOverlayProps } from './LoadingOverlay.types';

export function LoadingOverlay({ children, loading }: LoadingOverlayProps) {
  return (
    <>
      {children}
    </>
  )
}
