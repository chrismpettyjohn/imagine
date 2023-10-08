import React from 'react';

export function LoadingMessage() {
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
      <img src="/img/loading.gif" loading="lazy" />
      <h2>Connecting</h2>
    </div>
  )
}