import gql from 'graphql-tag';
import { RadioRequestFilterManyInput } from './radio-request.input';
import { RADIO_REQUEST_FRAGMENT, RadioRequestFragment } from './radio-request.fragment';

export const RADIO_REQUEST_FETCH_MANY_QUERY: any = gql`
  ${RADIO_REQUEST_FRAGMENT}
  query($filter: RadioRequestFilterManyInput!) {
    radioRequests(filter: $filter) {
      ...RadioRequestFragment
    }
  }
`

export interface RadioRequestFetchManyQueryVariables {
  filter: RadioRequestFilterManyInput;
}

export interface RadioRequestFetchManyQueryResponse {
  radioRequests: RadioRequestFragment[];
}