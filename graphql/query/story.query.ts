import gql from 'graphql-tag'

export const GET_STORIES = gql`
    query StudioStories($filter: MyStoriesFilter!) {
        studioStories(filter: $filter) {
            id
            name
            slug
            avatar
            status
            countViews
            updatedAt
        }
    }
`

export const GET_COUNT_STORIES = gql`
    query GetCountStories {
        studioCountStories
    }
`
