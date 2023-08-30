import React, { useContext } from 'react';
import { configContext } from '@imagine-cms/web';
import { OnlineUsersGrid } from '../online-users-grid/OnlineUsersGrid';

export function SiteFooter() {
  const { config } = useContext(configContext);

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-muted">
            <b style={{ letterSpacing: 2, color: '#197AA0', display: 'block', fontSize: 22, marginBottom: -10 }}>imagine</b>
            <i className="fa fa-lightbulb" style={{ color: '#197AA0' }} />
            <span style={{ float: 'right' }}> by <b style={{ color: '#197AA0' }}>LeChris</b></span>
          </span>
        </div>
      </footer >
    </div >
  )
}
