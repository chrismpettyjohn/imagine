import { Link } from 'wouter';
import { GameClientElement } from './GameClient.styled';
import React, { useContext, useEffect, useState } from 'react';
import { GameClientActions } from './game-client-actions/GameClientActions';
import { configContext, sessionContext, themeContext, useSSOCreate } from '@imagine-cms/web';

export function GameClient() {
  const generateSSO = useSSOCreate();
  const { config } = useContext(configContext);
  const { session } = useContext(sessionContext);
  const { showClient } = useContext(themeContext);
  const [showPreview, setShowPreview] = useState(true);

  const togglePreview = () => setShowPreview(_ => !_);

  useEffect(() => {
    generateSSO.runQuery();
  }, [session]);

  const ssoToken = generateSSO.data?.sessionSSOCreate?.ssoToken

  if (!session || !ssoToken) {
    return null;
  }

  return (
    <GameClientElement $visible={showClient} $preview={showPreview}>
      {
        showClient && (
          <>
            <GameClientActions />
          </>
        )
      }

      {
        showPreview && !showClient && (
          <div className="content">
            <Link to="/play">
              <div className="preview-overlay">
                <i className="fa fa-search-location" style={{ marginRight: 8 }} />
                Showing Preview
              </div>
            </Link>
          </div>
        )
      }
      <iframe
        src={`${config!.nitroURL}?sso=${ssoToken}`}
        style={{ height: '100%', width: '100%' }}
      />
    </GameClientElement>
  );
}
