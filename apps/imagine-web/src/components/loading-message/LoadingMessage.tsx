import React from 'react';
import { LoadingMessageProps } from './LoadingMessage.types';

export function LoadingMessage({ children = 'Connecting' }: LoadingMessageProps) {
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
      <img src="/img/loading.gif" loading="lazy" />
      <h2>{children}</h2>
    </div>
  )
}