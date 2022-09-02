import {Link} from 'wouter';
import React, {useContext} from 'react';
import {sessionContext} from '@imagine-cms/web';

export function UserContainer() {
  const {session} = useContext(sessionContext);

  if (!session) {
    return null;
  }

  return (
    <div id="me" className="mb-3">
      <div className="row align-items-center">
        <div className="col-lg-2 col-3 text-center">
          <div className="avatar">
            <img
              src={`https://imager.habboon.pw?figure=${session!.look}&direction=2&head_direction=3&gesture=sml&action=wav`}
              alt="Leader" loading="lazy" />
          </div>
        </div>
        <div className="col-xl-10 col-lg-9 offset-lg-1 offset-xl-0 offset-0 col-9">
          <div className="row align-items-center details">
            <div className="col-xl-6 col-lg-6 offset-lg-0 col-10">
              <h4>{session!.username}</h4>
              <h6 className="mb-0">
                {session!.motto}
              </h6>
            </div>
            <div className="col-xl-6 col-lg-6 text-right d-none d-lg-block">
              <div className="d-flex  justify-content-between  w-100">
                <Link to="/play"className="btn btn-primary px-3" rel="noreferrer">
                  <i className="fas fa-sign-in-alt mr-1" /> Enter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
