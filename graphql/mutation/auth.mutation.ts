import gql from 'graphql-tag'

export const SIGN_IN = gql`
    mutation SignIn($input: SignInTdo!) {
        signIn(input: $input) {
            token
        }
    }
`

export const SIGN_UP = gql`
    mutation SignUp($input: SignUpTdo!) {
        signUp(input: $input) {
            token
        }
    }
`
