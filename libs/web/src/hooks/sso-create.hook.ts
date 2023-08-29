import gql from 'graphql-tag';
import {UserWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const SSO_CREATE = gql`
  query {
      sessionSSOCreate {
          ssoToken
      }
  }
`;

export const useSSOCreate = (): UseQueryResponse<{ssoToken: string}> => {
  return useRunQuery(SSO_CREATE);
};
