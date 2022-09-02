import React, {useContext} from 'react';
import {configContext} from '@imagine-cms/web';
import {SocialMediaIcons} from '../social-media/SocialMediaIcons';
import {OnlineUsersGrid} from '../online-users-grid/OnlineUsersGrid';

export function SiteFooter() {
  const {config} = useContext(configContext);

  return (
    <footer>
      <div id="footer" className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 d-lg-block d-none">
             <OnlineUsersGrid />
            </div>
            <div className="col-lg-3 col-6">
              <h4 className="mb-3">Help</h4>
              <ul className="links">
                <li className="mb-1">
                  <a href="https://www.habboon.pw/help" aria-label="Help Centre">
                    <i className="fas fa-question" style={{left: -5, marginTop: 2}} /> Help Centre
                  </a>
                </li>
                <li className="mb-1">
                  <a href="https://www.habboon.pw/help/ban-appeals" aria-label="Ban Appeals">
                    <i className="fas fa-ban" style={{left: -5, marginTop: 2}} /> Ban Appeals
                  </a>
                </li>
                <li className="mb-1">
                  <a href="https://www.habboon.pw/help/scam-reports" aria-label="Scam Reports">
                    <i className="fas fa-money-bill-wave-alt" style={{left: -5, marginTop: 2}} /> Scam Reports
                  </a>
                </li>
                <li className="mb-1">
                  <a href="https://www.habboon.pw/help/tickets" aria-label="Ticket Centre">
                    <i className="fas fa-ticket-alt" style={{left: -5, marginTop: 2}} /> Ticket Centre
                  </a>
                </li>
                <li className="mb-1">
                  <a href="https://www.habboon.pw/help/password-recovery" aria-label="Password Resets">
                    <i className="fas fa-key" style={{left: -5, marginTop: 2}} /> Password Resets
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-6">
              <h4 className="mb-3">Social</h4>
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>
      <div id="legal-footer">
        <p>{config?.siteName} is a not for profit educational project.</p>
      </div>
    </footer>
  )
}
