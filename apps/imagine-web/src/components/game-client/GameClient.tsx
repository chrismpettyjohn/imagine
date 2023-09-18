import React, { useContext, useEffect, useMemo } from 'react';
import { GameClientElement } from './GameClient.styled';
import { GameClientActions } from './game-client-actions/GameClientActions';
import { configContext, sessionContext, themeContext, useSSOCreate } from '@imagine-cms/web';

export function GameClient() {
  const generateSSO = useSSOCreate();
  const { config } = useContext(configContext);
  const { session } = useContext(sessionContext);
  const { showClient } = useContext(themeContext);

  useEffect(() => {
    if (session) {
      generateSSO.runQuery();
    }
  }, []);

  const ssoToken = useMemo(() => {
    return generateSSO.data?.sessionSSOCreate?.ssoToken
  }, [generateSSO.data?.sessionSSOCreate?.ssoToken]);

  if (!session || !ssoToken || generateSSO.loading) {
    return null;
  }

  return (
    <GameClientElement $visible={showClient}>
      <GameClientActions />
      <iframe
        src={`${config!.nitroURL}?sso=${ssoToken}`}
        style={{ height: '100%', width: '100%' }}
      />
    </GameClientElement>
  );
}
