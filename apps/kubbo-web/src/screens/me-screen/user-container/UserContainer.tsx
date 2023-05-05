import { Link } from 'wouter';
import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';

export function UserContainer() {
  const { session } = useContext(sessionContext);

  if (!session) {
    return null;
  }

  return (
    <div className="card bg-secondary kubbo-display-me" style={{ width: '100%', height: '100%' }}>
      <div className="card-body text-white" style={{ background: `url(https://nitro-imager.kubbo.ch/?figure=${session.look}&gesture=sml&direction=4&size=l) no-repeat right 80%` }}>
        <p>
          <a href="/profile/LeChris" className="text-white"></a></p><h4>
          <a href="/profile/LeChris" className="text-white">{session.username} </a>
        </h4>
        {session.motto}
        <div className="mt-2 mb-4">
          <span className="text-warning text-shadow-me mx-1"><img src="/img/icons/credits.png" /> {session.credits} Credits</span>
          <span className="text-info text-shadow-me mx-1"><img src="/img/icons/duckets.png" /> {session.activityPoints} Duckets</span>
          <span className="text-primary text-shadow-me mx-1"><img src="/img/icons/diamonds.png" /> {session.vipPoints} Diamonds</span>
          <span className="text-danger text-shadow-me mx-1"><img src="/img/icons/kubbitos.png" /> 0 Kubbitos</span>

        </div>
        Last Online: <b>April 16, 2023 4:59am</b><br />
        Account Created: <b>December 05, 2022 1:02am</b><br /><br />
        <img src="/img/icons/online.gif" /> You have no friends online
        <p></p>
      </div>
    </div >

  )
}
