import gql from 'graphql-tag'

export const PUBLISH_CHAPTER = gql`
    mutation StudioPublishChapter($input: CreateChapterInput!, $story: String!) {
        studioPublishChapter(input: $input, story: $story) {
            id
            name
            slug
            avatar
            content {
                id
                src
                storage
            }
        }
    }
`

export const UPDATE_CHAPTER = gql`
    mutation StudioUpdateChapter($chapter: String!, $input: CreateChapterInput!) {
        studioUpdateChapter(chapter: $chapter, input: $input) {
            id
            content {
                id
                storage
                src
            }
            avatar
            slug
            name
        }
    }
`
