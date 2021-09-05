import {
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    SET_CURRENT,
    CLEAR_CURRENT,
    LOAD_COMMENTS,
    LOADED_POSTS,
    ADD_COMMENT,
    LIKE_POST,
    UNLIKE_POST,
    LOADED_LIKED_POSTS,
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
                posts: state.posts.filter(post => post._id !== action.payload)
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post._id === action.payload._id) return action.payload
                    else return post
                })
            }
        case SET_CURRENT:
            const current = state.posts.filter(post => post._id === action.payload);
            const idx = state.likedPosts.findIndex(cur => cur === current[0]._id);
            if (idx !== -1) {
                current.isLiked = true;
            } else {
                current.isLiked = false;
            }
            return {
                ...state,
                current: current
            }
        case LOADED_POSTS:
            return {
                ...state,
                posts: action.payload,
                comments: []
            }
        case LOADED_LIKED_POSTS:
            return {
                ...state,
                likedPosts: action.payload
            }
        case LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post._id === action.payload._id) {
                        return action.payload
                    } else {
                        return post;
                    }
                }),
                likedPosts: [action.payload._id, ...state.likedPosts],
                current: {
                    ...state.current,
                    isLiked: true
                }
            }
        case UNLIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post._id === action.payload._id) {
                        return action.payload
                    } else {
                        return post;
                    }
                }),
                likedPosts: state.likedPosts.filter(cur_id => cur_id === action.payload._id),
                current: {
                    ...state.current,
                    isLiked: false
                }
            }
        case LOAD_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.comments]
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