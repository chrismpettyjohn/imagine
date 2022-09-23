import React, {useContext} from 'react';
import {configContext} from '@imagine-cms/web';

export function SiteFooter() {
  const {config} = useContext(configContext);

  return (
    <div className="row" style={{height: 100, width: '100%', textAlign: 'center'}}>
      <div className="col-12">
        <h3 style={{letterSpacing: 2}}>Imagine</h3>
        <p><i className="far fa-heart" style={{marginRight: 4}} /><b>LeChris</b> and <b>Sonay</b></p>
      </div>
    </div>
  )
}
