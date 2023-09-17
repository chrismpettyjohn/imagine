import gql from 'graphql-tag';
import { RADIO_REQUEST_FRAGMENT, RadioRequestFragment } from './radio-request.fragment';
import { RadioRequestCreateInput } from './radio-request.input';

export const RADIO_REQUEST_CREATE_ONE_MUTATION: any = gql`
  ${RADIO_REQUEST_FRAGMENT}
  mutation($input: RadioRequestCreateInput) {
    radioRequestCreate(input: $input) {
      ...RadioRequestFragment
    }
  }
`

export interface RadioRequestCreateOneMutationVariables {
  input: RadioRequestCreateInput;
}

export interface RadioRequestCreateOneMutationResponse {
  radioRequestCreate: RadioRequestFragment;
}