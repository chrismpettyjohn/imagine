import './GameClient.css';
import React, { useContext, useEffect } from 'react';
import { useSSOCreate } from '../../hooks/sso-create.hook';
import { themeContext } from '../../context/theme/ThemeContext';
import { configContext } from '../../context/config/ConfigContext';
import { sessionContext } from '../../context/session/SessionContext';
import { GameClientActions } from './game-client-actions/GameClientActions';

export function GameClient() {
  const generateSSO = useSSOCreate();
  const { config } = useContext(configContext);
  const { session } = useContext(sessionContext);
  const { showClient } = useContext(themeContext);

  useEffect(() => {
    if (session) {
      if (!generateSSO.data && !generateSSO.loading) {
        generateSSO.runQuery();
      }
    }
  }, [session]);

  if (!session || !generateSSO.data?.ssoToken || generateSSO.loading) {
    return null;
  }

  return (
    <div
      className={`hotel-container ${showClient ? 'visible' : 'not-visible'}`}
    >
      <GameClientActions />
      <iframe
        src={`${config!.nitroURL}?sso=${generateSSO.data.ssoToken}`}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}
