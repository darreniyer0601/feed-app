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
    const likePost = (id) => {

    }

    // Unlike post
    const unlikePost = (id) => {

    }

    // Dislike post
    const dislikePost = (id) => {

    }

    // Un-dislike post
    const unDislikePost = (id) => {

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
            dislikePost,
            unlikePost,
            unDislikePost
        }}>
            {props.children}
        </PostContext.Provider>
    )

}

export default PostState;