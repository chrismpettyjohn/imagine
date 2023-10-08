import React, { useContext } from 'react';
import { Router } from '../../screens/Router';
import { themeContext } from '@imagine-cms/web';
import { ToastContainer } from 'react-toastify';
import { GameClient } from '../game-client/GameClient';
import { SiteHeader } from '../site-header/SiteHeader';
import { SiteFooter } from '../site-footer/SiteFooter';
import { SiteBody } from '../site-body/SiteBody.styled';
import { SiteMobileHeader } from '../site-mobile-header/SiteMobileHeader';
import { PageContainerElement, SiteContainerElement } from './SiteContainer.styled';
import { ChangeLanguageButton } from '../change-language-button/ChangeLanguageButton';

export function SiteContainer() {
  const { showClient } = useContext(themeContext);

  return (
    <>
      <SiteBody />
      <SiteContainerElement>
        <GameClient />
        <ToastContainer />
        {
          !showClient && (
            <>
              <SiteHeader />
              <SiteMobileHeader />
              <PageContainerElement>
                <Router />
              </PageContainerElement>
              <SiteFooter />
            </>
          )
        }
      </SiteContainerElement>
    </>
  )
}