import gql from "graphql-tag";

export const NEW_REVIEWS = gql`
    subscription SubReview($story: String!) {
        subReview(story: $story) {
            story {
                id
                countRating
                totalRating
            }
            review {
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
    }

`
