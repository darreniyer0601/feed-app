import {
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    SET_CURRENT,
    CLEAR_CURRENT,
    LOAD_COMMENTS,
    LOADED_POSTS,
} from '../types';

const PostReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.id) return action.payload
                    else return post
                })
            }
        case SET_CURRENT:
            return {
                ...state,
                current: state.posts.filter(post => post.id === action.payload)
            }
        case LOADED_POSTS:
            return {
                ...state,
                posts: action.payload,
                comments: []
            }
        case LOAD_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
                comments: []
            }
        default:
            return state;
    }
}

export default PostReducer;