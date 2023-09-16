import gql from 'graphql-tag';
import { StaffApplicationFilterOneInput } from './staff-application.input';

export const STAFF_APPLICATION_DELETE_ONE_MUTATION: any = gql`
  mutation($filter: StaffApplicationFilterOneInput!) {
    staffApplicationDelete(filter: $filter)
  }
`

export interface StaffApplicationDeleteOneMutationVariables {
  filter: StaffApplicationFilterOneInput;
}

export interface StaffApplicationDeleteOneMutationResponse {
  staffApplicationDelete: boolean;
}