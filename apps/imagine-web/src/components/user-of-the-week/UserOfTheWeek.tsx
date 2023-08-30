import React from 'react';

export function UserOfTheWeek() {
  return (
    <div className="card kubbo-card-bestuser border-warning" style={{ width: '100%', height: '100%' }}>
      <div className="card-header"><b>User of the week</b></div>
      <div className="card-body">
        <p>
          In <b> Kubbo Hotel </b> we recognize all our users, therefore, every <b> Friday at 5 in the afternoon </b> a user is chosen who, on merits, becomes the User of the week.<br />
          <img className="profile-look" src="https://nitro-imager.kubbo.ch/?figure=ch-3934-96-96.he-3228-105.sh-1730-1323.ha-3156-110.ea-1406.hd-990000650-156626-97556.lg-6907-92&amp;gesture=sml" />
          <br />This week's user is ...<br />
          <b>juan</b>, Congratulations! </p>
      </div>
    </div>
  )
}