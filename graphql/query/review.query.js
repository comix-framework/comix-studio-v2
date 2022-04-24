import gql from "graphql-tag";

export const GET_REVIEWS = gql`
    query GetReviews($input: GetReviewsInput!) {
        getReviews(input: $input) {
            id
            rating
            content
            createdAt
            user {
                id
                avatar
                slug
                name
            }
        }
    }
`
