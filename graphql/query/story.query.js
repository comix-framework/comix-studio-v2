import gql from "graphql-tag";

export const GET_STORIES_UPDATED = gql`
    query GetStoriesChapters($filter: StoriesFilterInput!) {
        getStoriesChapters(filter: $filter) {
            id
            name
            slug
            avatar
            content
            authors
            teams
            status
            countViews
            countComments
            countRating
            totalRating
            countBookmark
            createdAt
            updatedAt
            rating
            chapters {
                id
                name
            }
        }
    }
`

export const CHECK_BOOKMARK = gql`
    query CheckBookmark($story: String!) {
        checkBookmark(story: $story) {
            id
            createdAt
        }
    }
`
