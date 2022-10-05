import React, {useContext} from 'react';
import {sessionContext} from '@imagine-cms/web';

export function CurrencyStats() {
  const {session} = useContext(sessionContext);
  return (
    <div className="navbar-currencies d-flex">
      <div className="user-bar">
        <div className="icon credits" />
        <div className="item-column">
          <div className="item-text amount bold">{Number(session!.credits!).toLocaleString()}</div>
          <div className="item-text">credits</div>
        </div>
      </div>
      <div className="user-bar">
        <div className="icon duckets" />
        <div className="item-column">
          <div className="item-text amount bold">{Number(session!.activityPoints!).toLocaleString()}</div>
          <div className="item-text">duckets</div>
        </div>
      </div>
      <div className="user-bar">
        <div className="icon diamonds" />
        <div className="item-column">
          <div className="item-text amount bold">{Number(session.vipPoints).toLocaleString()}</div>
          <div className="item-text">diamonds</div>
        </div>
      </div>
    </div>
  )

}
