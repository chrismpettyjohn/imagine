import gql from 'graphql-tag';
import {useEffect} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';

const FETCH_AVATAR_FOR_USER = gql`
query($username: String!) {
  user
}
`

export function fetchAvatarForUserHook(username: string): {loading: boolean, avatar?: string} {
  const  [getAvatar, { loading, error, data }]  = useLazyQuery(SEARCH_POSTS, {
    variables: { query: `%${query}%` },
  });
}
