import gql from 'graphql-tag';

export const sessionCreateMutation = gql`
    mutation($username: String!, $password: String!) {
        sessionCreate(username: $username, password: $password)
    }
`
