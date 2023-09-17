import gql from 'graphql-tag';
import { StaffApplicationCreateInput } from './staff-application.input';
import { STAFF_APPLICATION_FRAGMENT, StaffApplicationFragment } from './staff-application.fragment';

export const STAFF_APPLICATION_CREATE_MUTATION: any = gql`
  ${STAFF_APPLICATION_FRAGMENT}
  mutation($input: StaffApplicationCreateInput!) {
    staffApplicationCreate(input: $input) {
      ...StaffApplicationFragment
    }
  }
`
export interface StaffApplicationCreateMutationVariables {
  input: StaffApplicationCreateInput
}

export interface StaffApplicationCreateMutationResponse {
  staffApplicationCreate: StaffApplicationFragment;
}
