import { useReducer } from 'react';
import axios from 'axios';

import PostContext from './PostContext';
import PostReducer from './PostReducer';

const initialState = {
    current: null,
    posts: [],
}

const PostState = (props) => {
    const [state, dispatch] = useReducer(PostReducer, initialState);

    // Add new post
    const addPost = (post) => {

    }

    // Set current post
    const setCurrent = (id) => {

    }
    
    // Update post
    const updatePost = (id) => {

    }

    // Delete post
    const deletePost = (id) => {

    }

    // Like post
    const likePost = (id, userId) => {

    }

    // Dislike post
    const dislikePost = (id, userId) => {

    }

    return (
        <PostContext.Provider value={{
            current: state.current,
            posts: state.posts,
            addPost,
            updatePost,
            deletePost,
            setCurrent,
            likePost,
            dislikePost
        }}>
            {props.children}
        </PostContext.Provider>
    )

}

export default PostState;