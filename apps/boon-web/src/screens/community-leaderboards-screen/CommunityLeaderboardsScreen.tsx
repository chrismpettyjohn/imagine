import React from 'react';
import gql from 'graphql-tag';
import {LeaderboardsCard} from '../../components/leaderboards-card/LeaderboardsCard';

const FETCH_MOST_CREDITS = gql`
  query {
      users(other: { take: 10, order: { credits: "DESC" }}) {
          id,
          look,
          username,
          credits,
      }
  }
`

const FETCH_MOST_ACTIVITY_POINTS = gql`
    query {
        users(other: { take: 10, order: { activityPoints: "DESC" }}) {
            id,
            look,
            username,
            activityPoints
        }
    }
`

const FETCH_MOST_VIP_POINTS = gql`
    query {
        users(other: { take: 10, order: { vipPoints: "DESC" }}) {
            id,
            look,
            username,
            vipPoints
        }
    }
`

export function CommunityLeaderboardsScreen() {
  return (
    <main className="position-relative container justify-content-center py-4">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          <LeaderboardsCard title="Most Credits" value={u => `${Number(u.credits ?? 0).toLocaleString()} Credits`} query={FETCH_MOST_CREDITS} />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <LeaderboardsCard title="Most Pixels" value={u => `${Number(u.activityPoints ?? 0).toLocaleString()} Pixels`} query={FETCH_MOST_CREDITS} />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
        <LeaderboardsCard title="Most VIP Points" value={u => `${Number(u.vipPoints ?? 0).toLocaleString()} VIP Points`} query={FETCH_MOST_VIP_POINTS} />
        </div>
      </div>
    </main>
  )
}
