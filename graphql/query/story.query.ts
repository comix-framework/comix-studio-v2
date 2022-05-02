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

export const GET_STORY_CHAPTERS = gql`
    query StudioStoryChapters($story: String!) {
        studioStory(story: $story) {
            id
            name
            slug
            avatar
            content
            authors
            teams
            status
            countViews
            updatedAt
            countRating
        }
        studioChapters(story: $story) {
            id
            name
            slug
            avatar
            countViews
            countComments
            createdAt
        }
    }
`

export const GET_CHAPTER = gql`
    query StudioChapter($chapter: String!) {
        studioChapter(chapter: $chapter) {
            id
            name
            slug
            story {
                id
                name
                slug
                avatar
            }
            avatar
            content {
                id
                src
                storage
            }
            countViews
            countComments
            order
            createdAt
        }
    }
`

export const GET_STORY = gql`
    query StudioStory($story: String!) {
        studioStory(story: $story) {
            id
            name
            slug
            avatar
            content
            authors
            teams
            status
            countViews
            updatedAt
            countRating
        }
    }
`
