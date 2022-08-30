import {Link} from 'react-router-dom';
import gql from 'graphql-tag';
import React, {useEffect} from 'react';
import {UserWire} from '@imagine-cms/types';
import {useRunQuery} from '../../graphql/run-query';

const FETCH_ONLINE_USERS = gql`
    query {
        users {
            id,
            username,
            look,
        }
    }
`

export function OnlineUsersGrid() {
  const {runQuery, loading, data} = useRunQuery<{users: UserWire[]}>(FETCH_ONLINE_USERS)

  useEffect(() => {
    runQuery();
  }, []);

  if (loading) {
    return <i className="fa fa-spinner fa-spin" />
  }

  return (
    <>
      <h4 className="mb-3">Online Users</h4>
      {
        loading && <i className="fa fa-spinner fa-spin" />
      }
      {
        data?.users?.map((user, userIndex) => (
          <div className={`avatar ${userIndex % 2 ? 'dark-gray' : 'light-gray'}`} key={`online_user_${user.id}`}>
            <Link to={`/profile/${user.username}`}>
              <img
                src={`https://imager.habboon.pw?figure=${user.look}&size=m&direction=3&head_direction=3&gesture=sml&headonly=1`}
                alt={user.username} data-toggle="tooltip" data-placement="top" title="" loading="lazy"
                data-original-title={user.username} />
            </Link>
          </div>
        ))
      }
    </>
  )
}
