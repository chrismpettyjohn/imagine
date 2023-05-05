import React, { useContext } from 'react';
import { configContext } from '@imagine-cms/web';
import { OnlineUsersGrid } from '../online-users-grid/OnlineUsersGrid';

export function SiteFooter() {
  const { config } = useContext(configContext);

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <img src="/img/imagine.jpg" width="80" style={{ borderRadius: '100%' }} />
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            <b>El Imaginar</b>
            <br />
            <span>Good code doesn't have to be imaginary</span>
            <br />
            Made With <i className="fa fa-heart mr-2" /> by <b>LeChris</b>
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="/help/privacy">Privacy Policy</a></li>
          <li className="ms-3"><a className="text-muted" href="/help/terms">Terms of Service</a></li>
          <li className="ms-3"><a className="text-muted" href="/help/about">About Kubbo</a></li>
        </ul>
      </footer>
    </div>
  )
}
