import gql from "graphql-tag";

export const ADD_COMMENT = gql`
    mutation CreateComment($input: CreateCommentInput!) {
        createComment(input: $input) {
            id
        }
    }
`
