import gql from 'graphql-tag';
import {SessionWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from '../graphql/run-query';

const FETCH_SESSION_BY_JWT = gql`
    query($jwt: String!) {
        sessionByJWT(jwt: $jwt) {
            id,
            userID,
        }
    }
`

export const useFetchSessionByJwt = (jwt: string): UseQueryResponse<{sessionByJWT: SessionWire}> => {
  return useRunQuery(FETCH_SESSION_BY_JWT, {jwt});
}
