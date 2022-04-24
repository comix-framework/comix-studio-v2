import gql from "graphql-tag";

export const SUB_COMMENT = gql`
    subscription SubComment($chapter: String!) {
        subComment(chapter: $chapter) {
            chapter {
                id
                countComments
                countViews
            }
            story {
                id
                countComments
            }
            comment {
                id
                user {
                    id
                    name
                    slug
                    avatar
                }
                createdAt
                content
            }
        }
    }
`
