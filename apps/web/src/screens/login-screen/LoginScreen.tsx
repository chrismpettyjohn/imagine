import React from 'react';
import {LoginForm} from '../../components/login-form/LoginForm';
import {LatestArticleCard} from '../../components/latest-article-card/LatestArticleCard';


export function LoginScreen() {
  return (
    <main className="position-relative container justify-content-center py-4">
      <div className="row justify-content-center">
        <div className="col-lg-11 mb-4">
          <div className="w-full d-flex align-items-center justify-content-center flex-column rounded-lg py-4 px-4" style={{background: 'url(https://cdn.discordapp.com/attachments/361693054744133642/977198815209730119/unknown.png) no-repeat center center / cover', boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, .6)' }}>

            <h4 className="text-white mb-2">We're putting the weekly rare rotations in your hands!</h4>
            <p className="text-white mb-1">You can now vote for 5 items you'd like to see in the catalog for a week. <a
              href="https://www.habboon.pw/voting/rare-rotations" className="font-weight-bolder">Click here</a> to get
              involved.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 d-lg-block d-none">
          <LatestArticleCard />
        </div>
        <div className="col-lg-4 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="silver">Login to Habboon!</h5>
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-lg-block d-none">
          Widgets
        </div>
      </div>
    </main>
  )
}
