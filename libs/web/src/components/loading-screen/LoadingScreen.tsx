import React from 'react';

export function LoadingScreen() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, background: '#5F8A96', width: '100%', height: '100%', textAlign: 'center' }}>
      <div style={{ marginTop: '10%' }}>
        <img className="fa-spin" src="/img/imagine-circle.png" loading="lazy" />
      </div>
    </div>
  )
}
