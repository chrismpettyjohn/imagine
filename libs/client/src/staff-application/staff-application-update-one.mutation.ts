import gql from 'graphql-tag';
import { StaffApplicationFilterOneInput, StaffApplicationUpdateInput } from './staff-application.input';

export const STAFF_APPLICATION_UPDATE_ONE_MUTATION: any = gql`
  mutation($filter: StaffApplicationFilterOneInput!, $input: StaffApplicationUpdateInput!) {
    staffApplicationUpdate(filter: $filter, input: $input)
  }
`

export interface StaffApplicationUpdateOneMutationVariables {
  filter: StaffApplicationFilterOneInput;
  input: StaffApplicationUpdateInput;
}

export interface StaffApplicationUpdateOneMutationResponse {
  staffApplicationUpdate: boolean;
}