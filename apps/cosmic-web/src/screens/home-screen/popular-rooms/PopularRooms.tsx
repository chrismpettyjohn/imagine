import React from 'react';

export function PopularRooms() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title-container d-flex">
          <div className="background-gray card-header-icon-container">
            <div className="icon rooms" />
          </div>
          <div className="card-header-titles">
            <div className="card-header-title">Popular Rooms</div>
            <span className="card-header-subtitle">Check out some rooms now</span></div>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex mb-4">
          <div className="room-image" />
          <div className="d-flex" style={{flexDirection: 'column'}}>
            <div className="room-title"><a href="#">room</a></div>
            <div className="room-description"></div>
            <div className="room-owner d-flex"><span className="head-figure"><img alt="User avatar"
                                                                                  className="avatar avatar-m"
                                                                                  src="https://www.habbo.com/habbo-imaging/avatarimage?figure=hd-209-1373.lg-3320-110-1408.hr-3163-42.sh-3524-110-92.ch-3077-64-1408&amp;head_direction=2&amp;direction=2&amp;gesture=sml&amp;size=s&amp;headonly=1" /></span>
              <p className="room-owner-username">Dude</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
