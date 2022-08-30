import React from 'react';
// @ts-ignore - the types for this lib are bad
import Overlay from 'react-loading-overlay';
import {LoadingOverlayProps} from './LoadingOverlay.types';

export function LoadingOverlay({children, loading}: LoadingOverlayProps) {
  return (
    <Overlay active={loading} spinner>
      {children}
    </Overlay>
  )
}
