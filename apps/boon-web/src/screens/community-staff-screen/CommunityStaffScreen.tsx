import React, {useEffect} from 'react';
import {useFetchStaffRanks} from '@imagine-cms/web';

export function CommunityStaffScreen() {
  const {runQuery, loading, data} = useFetchStaffRanks();

  useEffect(() => {
    runQuery()
  }, []);

  return (
    <main className="position-relative container justify-content-center py-4">
      <div className="row">
        <div className="col-lg-8 col-12">
          <div className="col-12">
            <div id="staff-banner">
              <img
                src="https://imager.habboon.pw/?figure=sh-3035-92.hr-5347-31.ch-3013-92.ca-4037-68-92.hd-629-3.lg-720-77.he-3974-1408.ha-3298-77-92&size=m&direction=3&head_direction=3&gesture=sml&headonly=1"
                className="staff" />
            </div>
          </div>
          { loading && (
            <>
              <i className="fa fa-spinner fa-spin fa-2x" />
              <h2>Loading Staff...</h2>
            </>
          )}
          {
            data?.ranks?.map(rank => (
              <div className="row" key={`staff_rank_${rank.id}`}>
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="silver" style={{backgroundColor: '#002FA2', textShadow: 'none', color: '#fff', borderRadius: 5, marginBottom: 8}}>
                        {rank.name}
                      </h5>
                      <img src={`https://assets.habboon.pw/c_images/album1584/${rank.badgeCode}.gif`} title={rank.name} style={{position: 'absolute', top: 15, right: 25 }}/>
                      <div className="row no-gutters">
                        <div className="col-lg-6 col-12">
                          <div className="row no-gutters">
                            <div className="col-12">
                              <div className="staff-block ">
                                <div className="row no-gutters align-items-center">
                                  <div className="col-2 text-center">
                                    <img
                                      src="https://imager.habboon.pw/?figure=sh-3035-92.hr-5347-31.ch-3013-92.ca-4037-68-92.hd-629-3.lg-720-77.he-3974-1408.ha-3298-77-92&size=m&direction=3&head_direction=3&gesture=sml&headonly=1"
                                      className="avatar  offline " alt="administrator" />
                                  </div>
                                  <div className="col-10">
                                    <strong>{rank.name}</strong><br />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="col-lg-4 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="silver">About Habboon Staff</h5>
              <p className="mb-0">The Habboon staff team is one big happy family, each staff member has a different role
                and duties to fulfill. <br/><br/>Most of our team usually consists of players that have been around Boon
                  for quite a while, but this doesn't mean we only recruit old  known players, we recruit those who
                  shine out to us!</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="silver">How do I join the team?</h5>
              <p className="mb-0">Every couple of months staff applications may open up via a <a
                href="https://www.habboon.pw/articles" target="_blank" rel="noreferrer">news article</a> giving users a chance to join
                the team, though we also like to handpick users that we feel are worthy of a trial. Things that we look
                out for are professionalism, a clear record, friendly  a frequent event host.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
