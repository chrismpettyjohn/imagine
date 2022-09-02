import gql from 'graphql-tag';
import {SessionCreatedWire} from '@imagine-cms/types';
import {UseMutationResponse, useRunMutation} from '../graphql/run-mutation';

const CREATE_NEW_SESSION = gql`
    mutation($username: String!, $password: String!) {
        sessionCreate(sessionCreateInput: {
            username: $username
            password: $password
        }), { id, accessToken, userID }
    }
`

export const useSessionCreateMutation = (username: string, password: string): UseMutationResponse<{sessionCreate: SessionCreatedWire}> => {
  return useRunMutation(CREATE_NEW_SESSION, { username, password });
}
