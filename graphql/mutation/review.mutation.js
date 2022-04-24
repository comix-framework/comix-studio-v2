import gql from "graphql-tag";

export const ADD_REVIEW = gql`
    mutation CreateReview($input: CreateReviewInput!) {
        createReview(input: $input) {
            id
            content
            rating
            createdAt
            user {
                id
                name
                email
                slug
                avatar
            }
        }
    }

`
