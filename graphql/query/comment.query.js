import gql from "graphql-tag";

export const GET_COMMENTS = gql`
    query GetComments($input: GetCommentInput!) {
        getComments(input: $input) {
            id
            content
            user {
                id
                name
                slug
                avatar
            }
            createdAt
        }
    }
`
