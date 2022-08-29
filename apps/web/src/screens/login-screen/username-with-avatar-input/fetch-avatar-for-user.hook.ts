import gql from 'graphql-tag';
import {useLazyQuery} from '@apollo/react-hooks';

const FETCH_AVATAR_FOR_USER = gql`
query($username: String!) {
  user {
    username(username: $username),
    look
}
`

export function useFetchAvatarForUserHook(username: string): {loading: boolean, avatar?: string} {
  const  [getAvatar, { loading, error, data }]  = useLazyQuery(FETCH_AVATAR_FOR_USER, {
    variables: { username },
  });
  return {
    loading,
    avatar: data?.look,
  }
}
