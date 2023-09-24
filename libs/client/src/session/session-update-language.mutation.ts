import gql from 'graphql-tag';
import { SessionUpdateLanguageInput } from './session.input';

export const SESSION_UPDATE_LANGUAGE_MUTATION: any = gql`
  mutation($input: SessionUpdateLanguageInput!) {
    sessionUpdateLanguage(input: $input) {
      success
    }
  }
`

export interface SessionUpdateLanguageResponse {
  sessionUpdateLanguage: {
    success: boolean;
  }
}
export interface SessionUpdateLanguageVariables {
  input: SessionUpdateLanguageInput;
}