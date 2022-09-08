import React, {useEffect} from 'react';
import {useFetchPopularRooms} from '@imagine-cms/web';
import {LoadingOverlay} from '../../../components/loading-overlay/LoadingOverlay';

export function PopularRooms() {
  const {runQuery, data, loading} = useFetchPopularRooms(4);
  const popularRooms = data?.rooms;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <LoadingOverlay loading={loading}>
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
          {
            popularRooms?.map(room => (
              <div className="d-flex mb-4" key={`popular_room_${room.id}`}>
                <div className="room-image" />
                <div className="d-flex" style={{flexDirection: 'column'}}>
                  <div className="room-title">
                    <a href="#">{room.name}</a>
                  </div>
                  <div className="room-description">
                    {room.description}
                  </div>
                  <div className="room-owner d-flex"><span className="head-figure">
                  <img className="avatar avatar-m" src={`https://www.habbo.com/habbo-imaging/avatarimage?figure=${room.user?.look}&head_direction=2&direction=2&gesture=sml&size=s&headonly=1`} /></span>
                    <p className="room-owner-username">{room.user?.username}</p></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </LoadingOverlay>
  )
}
