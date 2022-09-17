import {Link} from 'wouter';
import React, {useContext} from 'react';
import {UserGuard} from '../user-guard/UserGuard';
import {configContext} from '@imagine-cms/web';

export function SiteHeader() {
  const {config} = useContext(configContext);

  return (
    <div id="header-content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hotel"></div>
            <div className="online-count-box"><b>0</b>users online</div>
            <UserGuard>
              <Link to="/play" className="btn green big check-in-header" target="_blank">Enter {config?.siteName}</Link>
            </UserGuard>
          </div>
        </div>
      </div>
    </div>
  )
}
