import React from 'react';

export function DashboardScreen() {
  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card corona-gradient-card p-4">
            <div className="card-body py-0 px-0 px-sm-3">
              <div className="row align-items-center">
                <div className="col-5 col-sm-7 col-xl-8 p-0">
                  <h3 className="mb-1 mb-sm-0">
                    Welcome back,
                  </h3>
                  <p className="mb-0 font-weight-normal d-none d-sm-block">
                    Click something on the left because this page is still empty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
