import {Link} from 'wouter';
import React, {useContext} from 'react';
import {configContext, sessionContext} from '@imagine-cms/web';

export function SiteHeader() {
  const {config} = useContext(configContext);
  const {session} = useContext(sessionContext);

  return (
    <>
      <header className="header-container">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="header-card">
              <div className="header-inner-card">
                <div className="information"><img className="inline-block" src={config!.logoURL!} />
                  <div className="online-user"><span className="count">0</span>&nbsp; users online</div></div>
                <div className="habbo-button">
                  <div className="enter-hotel">
                    <div className="inner">
                      <Link to="/register">Create an account in {config!.siteName!}!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="content-bar" />
    </>
  )
}
