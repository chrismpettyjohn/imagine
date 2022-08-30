import gql from 'graphql-tag';
import {useLazyQuery} from '@apollo/react-hooks';
import {useEffect} from 'react';

const FETCH_AVATAR_FOR_USER = gql`
query($username: String!) {
  users(username: $username) {
    look
  }
}
`

export function useFetchAvatarForUserHook(username?: string): {loading: boolean, avatar?: string} {
  const  [getAvatar, { loading, error, data }]  = useLazyQuery(FETCH_AVATAR_FOR_USER, {
    variables: { username },
  });

  useEffect(() => {
    if (username) {
      getAvatar();
    }
  }, [username]);

  console.log(data)

  return {
    loading,
    avatar: data?.users?.[0]?.look
  }
}
