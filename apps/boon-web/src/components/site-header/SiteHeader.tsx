import {Link} from 'wouter';
import React, {useContext} from 'react';
import {configContext} from '../../context/config/ConfigContext';

export function SiteHeader() {
  const {config} = useContext(configContext);

  return (
    <>
      <header className="position-relative">
        <div className="container">
          <div
            className="row justify-content-center justify-content-md-between justify-content-lg-between align-items-center">
            <div className="col-lg-3 col-md-6 d-lg-block d-md-block d-none">
              <a href="/">
                <img src={config?.logoURL} alt="Hotel Logo" loading="lazy" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-8">
              <div className="row">
                <div className="col-12">
                  <Link to="/register">
                    <a className="enter" aria-label="Register">
                      <div>
                        <i className="fas fa-plus" /> Register now!
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="col-12">
                  <div className="online">
                    <i className="fas fa-users" /> <span className="count">0</span> Users Online
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
