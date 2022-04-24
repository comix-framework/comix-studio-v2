import gql from 'graphql-tag'


export const TOGGLE_BOOKMARK = gql`
    mutation ToogleBookmark($story: String!) {
        toogleBookmark(story: $story) {
            id
        }
    }
`;
