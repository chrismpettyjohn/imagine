import gql from 'graphql-tag';

export const TEMP_USER_LOGIN_MUTATION: any = gql`
  mutation {
    tempUserLogin {
      id
      accessToken
      userID
    }
  }
`

export interface TempUserSession {
  id: number;
  accessToken: string;
  userID: number;
};

export interface TempUserLoginResponse {
  tempUserLogin: TempUserSession;
}
