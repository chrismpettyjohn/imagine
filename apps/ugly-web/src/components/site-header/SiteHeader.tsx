import {Link} from 'wouter';
import React, {useContext} from 'react';
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
            <Link to="/play" className="btn green big check-in-header" target="_blank">Enter {config?.siteName}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
