import { gql } from "apollo-boost";

export const SEARCH = gql`
    query searchPost($term: String!){
        searchPost(term: $term){
            files{
                url
            }
            likeCount
        }

        searchUser(term:$term){
            avatar
            name
            isFollowing
            isSelf
        }
    }
`;