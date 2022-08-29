import React from 'react';

export function RegisterScreen() {
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
        <div className="col-lg-6">
          <div id="registration-banner" className="mb-3">
            <img
              src="https://imager.habboon.pw?figure=cc-50030-77.sh-3035-1408.hr-7326-34-34.wa-3872-1408.hd-629-1.he-3873-1408.fa-3276-73.ch-3881-77.lg-7789-110.ca-4037-1408-1408&amp;size=m&amp;direction=3&amp;head_direction=3&amp;gesture=sml&amp;headonly=1"
              className="staff" alt="Staff Member" data-id="1511744" data-rank="3" data-toggle="tooltip"
              data-placement="top" title="" data-original-title="bub" />
              <div className="bubble">
                <div className="left"></div>
                <div className="middle"><strong>bub</strong>: <span id="quotes" style={{opacity: 0.523553}}>Enjoy your stay! :)</span>
                </div>
                <div className="right">&nbsp;</div>
              </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="silver">Register</h5>
              <form method="post" className="form" noValidate>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" value="" className="form-control" id="username"
                         placeholder="Username"
                         data-parsley-required-message="Please enter the username you would like!" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" value="" className="form-control" id="email" placeholder="Email"
                         data-parsley-required-message="Please enter your email address!" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" className="form-control" placeholder="Password" id="password"
                         data-parsley-required-message="Please enter a password!" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password-confirmation">Confirm Password</label>
                  <input type="password" name="password_confirmation" className="form-control"
                         id="password-confirmation" placeholder="Password again"
                         data-parsley-required-message="Re-type your chosen password!" required />
                </div>
                <div className="form-group mb-0">
                  <button className="btn btn-primary btn-block">Join now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
