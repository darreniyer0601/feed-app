import { useReducer } from 'react';
import axios from 'axios';

import PostContext from './PostContext';
import PostReducer from './PostReducer';

import {
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    SET_CURRENT,
    CLEAR_CURRENT,
} from '../types';

const initialState = {
    current: null,
    posts: [],
}

const PostState = (props) => {
    const [state, dispatch] = useReducer(PostReducer, initialState);

    // Add new post
    const addPost = async (post) => {
        try {
            const res = await axios.post('/api/post', post, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        } catch (err) {
            console.log(err.message);
        }
    }

    // Set current post
    const setCurrent = (id) => {
        dispatch({
            type: SET_CURRENT,
            payload: id
        })
    }

    // Clear current post
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT
        })
    }
    
    // Update post
    const updatePost = async (post) => {
        try {
            const res = await axios.put(`/api/post/${post.id}`, post, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            dispatch({
                type: UPDATE_POST,
                payload: res.data
            })
        } catch (err) {
            console.log(err.message);
        }
    }

    // Delete post
    const deletePost = async (id) => {
        try {
            await axios.delete(`/api/post/${id}`);

            dispatch({
                type: DELETE_POST,
                payload: id
            })
        } catch (err) {
            console.log(err.message);
        }
    }

    // Like post
    const likePost = async (id) => {
        try {

        } catch (err) {
            console.log(err);
        }
    }

    // Unlike post
    const unlikePost = async (id) => {
        try {

        } catch (err) {
            console.log(err);
        }
    }

    // Dislike post
    const dislikePost = async (id) => {
        try {

        } catch (err) {
            console.log(err);
        }
    }

    // Un-dislike post
    const unDislikePost = async (id) => {
        try {

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <PostContext.Provider value={{
            current: state.current,
            posts: state.posts,
            addPost,
            updatePost,
            deletePost,
            setCurrent,
            clearCurrent,
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