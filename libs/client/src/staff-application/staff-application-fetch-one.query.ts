import gql from 'graphql-tag';
import { StaffApplicationFilterOneInput } from './staff-application.input';
import { STAFF_APPLICATION_FRAGMENT, StaffApplicationFragment } from './staff-application.fragment';

export const STAFF_APPLICATION_FETCH_ONE_QUERY: any = gql`
  ${STAFF_APPLICATION_FRAGMENT}
  query($filter: StaffApplicationFilterOneInput!) {
    staffApplication(filter: $filter) {
      ...StaffApplicationFragment
    }
  }
`

export interface StaffApplicationFetchOneQueryVariables {
  filter: StaffApplicationFilterOneInput;
}

export interface StaffApplicationFetchOneQueryResponse {
  staffApplication: StaffApplicationFragment;
}