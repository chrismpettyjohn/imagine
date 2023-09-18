import './GameClientActions.css';
import { useLocation } from 'wouter';
import React, { useState } from 'react';

export function GameClientActions() {
  const [, setLocation] = useLocation();
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function toggleWebView(): void {
    setLocation('/me');
  }

  async function toggleFullScreen(): Promise<void> {
    const action: Promise<void> = isExpanded
      ? document.exitFullscreen()
      : document.body.requestFullscreen();

    await action;
    setExpanded(!isExpanded);
  }

  function reloadPage(): void {
    window.location.reload();
  }

  return (
    <div className="actions">
      <button onClick={toggleWebView}>Web</button>
      <button onClick={toggleFullScreen}>
        <i className={`fas ${isExpanded ? 'fa-compress' : 'fa-expand'}`} />
      </button>
      <button onClick={reloadPage}>
        <i className="fas fa-sync" />
      </button>
    </div>
  );
}
