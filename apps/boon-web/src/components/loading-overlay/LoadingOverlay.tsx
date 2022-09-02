import React from 'react';
// @ts-ignore - There are no valid types for this lib
import BaseLoadingOverlay from 'react-loading-overlay';
import {LoadingOverlayProps} from './LoadingOverlay.types';

export function LoadingOverlay({children, loading}: LoadingOverlayProps) {
  return (
    <BaseLoadingOverlay active={loading} spinner>
      {children}
    </BaseLoadingOverlay>
  )
}
