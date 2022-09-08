import {Link} from 'wouter';
import React, {useContext} from 'react';
import {configContext} from '@imagine-cms/web';
import {GuestGuard} from '../guest-guard/GuestGuard';

export function SiteHeader() {
  const {config} = useContext(configContext);
  return (
    <>
      <header className="header-container">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="header-card">
              <div className="header-inner-card">
                <div className="information"><img className="inline-block" src={config!.logoURL!} />
                  <div className="online-user"><span className="count">0</span>&nbsp; users online</div></div>
                <GuestGuard>
                  <Link to="/register">
                    <div className="habbo-button">
                      <div className="enter-hotel">
                        <div className="inner">Create an account in {config!.siteName!}!
                        </div>
                      </div>
                    </div>
                  </Link>
                </GuestGuard>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="content-bar" />
    </>
  )
}
