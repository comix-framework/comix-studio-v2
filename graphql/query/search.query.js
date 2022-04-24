import gql from "graphql-tag";

export const GET_SEARCH_RECOMMENDED = gql`
    query GetSearchRecommend($input: SearchRecomment!) {
        getSearchRecommend(input: $input) {
            id
            name
            slug
        }
    }
`
