import gql from 'graphql-tag';
import { RadioRequestFilterOneInput, RadioRequestReviewInput } from './radio-request.input';

export const RADIO_REQUEST_REVIEW_ONE_MUTATION: any = gql`
  mutation($filter: RadioRequestFilterOneInput!, $input: RadioRequestReviewInput!) {
    radioRequestReview(filter: $filter, input: $input)
  }
`

export interface RadioRequestReviewOneMutationVariables {
  filter: RadioRequestFilterOneInput;
  input: RadioRequestReviewInput;
}

export interface RadioRequestReviewOneMutationResponse {
  radioRequestReview: boolean;
}