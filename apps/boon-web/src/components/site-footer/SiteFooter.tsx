import React from 'react';
import {OnlineUsersGrid} from '../online-users-grid/OnlineUsersGrid';

export function SiteFooter() {
  return (
    <footer>
      <div className="christmas-trees"></div>
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
              <ul className="social">
                <li><a href="https://www.facebook.com/habboonltd" target="_blank" rel="noopener noreferrer"
                       aria-label="Facebook"><i className="fab fa-facebook-square"></i></a></li>
                <li><a href="https://twitter.com/habboonpw" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i
                  className="fab fa-twitter-square"></i></a></li>
                <li><a href="https://www.snapchat.com/add/boonltd" target="_blank" rel="noopener noreferrer" aria-label="Snapchat"><i
                  className="fab fa-snapchat-square"></i></a></li>
                <li><a href="https://www.instagram.com/officialhabboon/" target="_blank" rel="noopener noreferrer"
                       aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://discord.gg/habboon" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i
                  className="fab fa-discord"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="legal-footer">
        <p>Habboon is a not for profit educational project.</p>
      </div>
    </footer>
  )
}
