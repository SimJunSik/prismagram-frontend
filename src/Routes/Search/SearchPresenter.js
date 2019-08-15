import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Component/FatText";
import Loader from "../../Component/Loader";
import UserCard from "../../Component/UserCard";
import SquarePost from "../../Component/SquarePost";

const Wrapper = styled.div`
    height: 50vh;
    padding-top: 100px;
`;

const Section = styled.div`
    margin-bottom: 50px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, 160px);
    grid-template-rows: 160px;
    grid-auto-rows: 160px;
`;

const PostSection = styled(Section)`
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: 200px;
    grid-auto-rows: 200px;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
    if(searchTerm === undefined){
        return (
            <Wrapper>
                <FatText text="Search for something" />
            </Wrapper>
        )
    }
    else if(loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        )
    }
    else if(data && data.searchUser && data.searchPost){
        return (
            <Wrapper>
                <Section>
                    {
                        data.searchUser.length === 0 ? 
                        <FatText text="No users found" /> : 
                        data.searchUser.map(user => <UserCard
                                                        key={user.id}
                                                        name={user.name} 
                                                        isFollowing={user.isFollowing} 
                                                        url={user.avatar} 
                                                        isSelf={user.isSelf} 
                                                        id={user.id}
                                                        />)
                    }
                </Section>
                <PostSection>
                    {
                        data.searchPost.length === 0 ? 
                        <FatText text="No Posts found" /> :
                        data.searchPost.map(post => 
                            <SquarePost 
                                key = {post.id}
                                likeCount = {post.likeCount}
                                commentCount = {post.commentCount}
                                file = {post.files[0]}/>  
                        )
                    }
                </PostSection>
            </Wrapper>
        )
    }
};

SearchPresenter.propTypes = {
    searchTerm: PropTypes.string,
    loading: PropTypes.bool
};

export default SearchPresenter;