import gql from 'graphql-tag';
import { RadioRequestFilterOneInput } from './radio-request.input';
import { RADIO_REQUEST_FRAGMENT, RadioRequestFragment } from './radio-request.fragment';

export const RADIO_REQUEST_FETCH_ONE_QUERY: any = gql`
  ${RADIO_REQUEST_FRAGMENT}
  query($filter: RadioRequestFilterOneInput!) {
    radioRequest(filter: $filter) {
      ...RadioRequestFragment
    }
  }
`

export interface RadioRequestFetchOneQueryVariables {
  filter: RadioRequestFilterOneInput;
}

export interface RadioRequestFetchOneQueryResponse {
  radioRequest: RadioRequestFragment;
}