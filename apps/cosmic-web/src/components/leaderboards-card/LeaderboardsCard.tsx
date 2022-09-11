import {Link} from 'wouter';
import React, {useEffect} from 'react';
import {UserWire} from '@imagine-cms/types';
import {useRunQuery} from '@imagine-cms/web';
import {LeaderboardsCardProps} from './LeaderboardsCard.types';

export function LeaderboardsCard({title, value, query}: LeaderboardsCardProps) {
  const {runQuery, loading, data} = useRunQuery<{users: UserWire[]}>(query)

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title-container">
          <div className="card-header-title">{title}</div>
        </div>
      </div>
      <div className="card-content no-spacing">
        <div className="highscore-row">
          {
            data?.users?.map((user, index) => (
              <div className="justify-between top-users-item no-spacing ng-star-inserted highscore" key={`leaderboard_${title}_user_${user.id}`}>
                <span className="ranking-item-nth">{index+1}</span>
                <div className="self-baseline">
                  <img className="avatar avatar-m" src={`https://www.habbo.com/habbo-imaging/avatarimage?figure=${user.look}&head_direction=3&direction=3&gesture=sml&size=m&headonly=0`} />
                </div>
                <a href="#">{user.username}</a>
                <span className="amount text-right">
                  {value(user)}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
