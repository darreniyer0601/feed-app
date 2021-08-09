import { useReducer } from 'react';
import axios from 'axios';

import UserContext from './UserContext';
import UserReducer from './UserReducer';

import {} from '../types';

const initialState = {
    user: null,
    likedPosts: [],
    dislikedPosts: [],
}

const UserState = (props) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    // Add post to liked
    const addToLiked = (id) => {

    }

    // Add post to disliked
    const addToDisliked = (id) => {

    }

    // Remove post from liked
    const removeFromLiked = (id) => {

    }

    // Remove post from disliked
    const removeFromDisliked = (id) => {

    }

    return (
        <UserContext.Provider value={{
            likedPosts: state.likedPosts,
            dislikedPosts: state.dislikedPosts,
            addToLiked,
            addToDisliked,
            removeFromLiked,
            removeFromDisliked
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;