import gql from 'graphql-tag';
import { SessionUpdateEmailInput } from './session.input';

export const SESSION_UPDATE_EMAIL_MUTATION: any = gql`
  mutation($input: SessionUpdateEmailInput!) {
    sessionUpdateEmail(input: $input) {
      success
    }
  }
`

export interface SessionUpdateEmailResponse {
  sessionUpdateEmail: {
    success: boolean;
  }
}
export interface SessionUpdateEmailVariables {
  input: SessionUpdateEmailInput;
}