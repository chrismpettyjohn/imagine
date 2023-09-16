import gql from 'graphql-tag';
import { StaffApplicationFilterManyInput } from './staff-application.input';
import { STAFF_APPLICATION_FRAGMENT, StaffApplicationFragment } from './staff-application.fragment';

export const STAFF_APPLICATION_FETCH_MANY_QUERY: any = gql`
  ${STAFF_APPLICATION_FRAGMENT}
  query($filter: StaffApplicationFilterManyInput!) {
    staffApplications(filter: $filter) {
      ...StaffApplicationFragment
    }
  }
`

export interface StaffApplicationFetchManyQueryVariables {
  filter: StaffApplicationFilterManyInput;
}

export interface StaffApplicationFetchManyQueryResponse {
  staffApplications: StaffApplicationFragment[];
}