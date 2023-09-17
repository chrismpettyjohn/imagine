import gql from 'graphql-tag';
import { RadioRequestFilterOneInput, RadioRequestUpdateInput } from './radio-request.input';

export const RADIO_REQUEST_UPDATE_ONE_MUTATION: any = gql`
  mutation($filter: RadioRequestFilterOneInput!, $input: RadioRequestUpdateInput!) {
    radioRequestUpdate(filter: $filter, input: $input)
  }
`

export interface RadioRequestUpdateOneMutationVariables {
  filter: RadioRequestFilterOneInput;
  input: RadioRequestUpdateInput;
}

export interface RadioRequestUpdateOneMutationResponse {
  radioRequestUpdate: boolean;
}