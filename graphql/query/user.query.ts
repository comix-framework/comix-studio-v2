import gql from 'graphql-tag'

export const GET_ME = gql`
    query Me {
        me {
            id
            name
            avatar
            email
            slug
            role
        }
    }
`
