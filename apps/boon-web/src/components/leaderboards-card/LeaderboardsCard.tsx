import {Link} from 'wouter';
import React, {useEffect} from 'react';
import {UserWire} from '@imagine-cms/types';
import {useRunQuery} from '@imagine-cms/web';
import {LeaderboardsCardProps} from './LeaderboardsCard.types';

export function LeaderboardsCard({title, value, query}: LeaderboardsCardProps) {
  const {runQuery, loading, data} = useRunQuery<{users: UserWire[]}>(query)

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="silver">
          {title}
        </h5>
        {
          loading && (
            <>
              <i className="fa fa-spinner fa-spin fa-2x" />
              <h2>Loading...</h2>
            </>
          )
        }
        <table className="leaderboard-table" width="100%">
          <tbody>
          {
            data?.users?.map(user => (
              <tr key={`user_${user.id}`} style={{backgroundColor: 'f8f9fa'}}>
                <td width="25%">
                  <img src={`https://imager.habboon.pw?figure=${user.look}&size=m&direction=2&head_direction=2&gesture=sml&headonly=1`} />
                </td>
                <td width="75%">
                  <Link to={`/profiles/${user.username}`}>
                    <b>{user.username}</b>
                  </Link>
                  <b /> <br />{value(user)}
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}
