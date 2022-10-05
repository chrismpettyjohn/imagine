import gql from 'graphql-tag';
import {UserWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const SSO_CREATE = gql`
  query {
      sessionSSOCreate {
          generatedSSO
      }
  }
`;

export const useSSOCreate = (): UseQueryResponse<{generatedSSO: string}> => {
  return useRunQuery(SSO_CREATE);
};
