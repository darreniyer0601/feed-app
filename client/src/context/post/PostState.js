import { useReducer } from "react";
import axios from "axios";

import PostContext from "./PostContext";
import PostReducer from "./PostReducer";

import {
	LOADED_POSTS,
	ADD_POST,
	UPDATE_POST,
	DELETE_POST,
	SET_CURRENT,
	CLEAR_CURRENT,
	LOAD_COMMENTS,
	ADD_COMMENT,
	LIKE_POST,
	UNLIKE_POST,
} from "../types";

const initialState = {
	current: null,
	posts: [],
	likedPosts: [],
	comments: [],
};

const PostState = (props) => {
	const [state, dispatch] = useReducer(PostReducer, initialState);

	// Get all posts
	const getPosts = async () => {
		try {
			const res = await axios.get("/api/post", {
				headers: {
					Authorization: `${localStorage.getItem("token")}`,
				},
			});

			dispatch({
				type: LOADED_POSTS,
				payload: res.data,
			});
		} catch (err) {
			console.log(err);
		}
	};

	// Add new post
	const addPost = async (post) => {
		try {
			const res = await axios.post("/api/post", post, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `${localStorage.getItem("token")}`,
				},
			});

			dispatch({
				type: ADD_POST,
				payload: res.data,
			});
		} catch (err) {
			console.log(err.message);
		}
	};

	// Set current post
	const setCurrent = (id) => {
		dispatch({
			type: SET_CURRENT,
			payload: id,
		});
	};

	const fetchComments = async () => {
		try {
			// Fetch comments for current post
			const res = await axios.get(`/api/comment/${state.current[0]._id}`, {
				headers: {
					Authorization: `${localStorage.getItem("token")}`,
				},
			});

			dispatch({
				type: LOAD_COMMENTS,
				payload: res.data,
			});
		} catch (err) {
            console.log(err);
        }
	};

	// Clear current post
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT,
		});
	};

	// Update post
	const updatePost = async (post) => {
		try {
			const res = await axios.put(`/api/post/${post.id}`, post, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `${localStorage.getItem("token")}`,
				},
			});

			dispatch({
				type: UPDATE_POST,
				payload: res.data,
			});
		} catch (err) {
			console.log(err.message);
		}
	};

	// Delete post
	const deletePost = async (id) => {
		try {
			await axios.delete(`/api/post/${id}`, {
				headers: {
					Authorization: `${localStorage.getItem("token")}`,
				},
			});

			dispatch({
				type: DELETE_POST,
				payload: id,
			});
		} catch (err) {
			console.log(err.message);
		}
	};

	// Like post
	const likePost = async (id) => {
		try {
			const updatedPost = await axios.post(`/api/post/like/${id}`, {
				headers: {
					Authorization: `${localStorage.getItem("token")}`,
				},
			});

			await axios.post(`/api/user/like/${id}`, {
				headers: {
					Authorization: `${localStorage.getItem("token")}`,
				},
			});

			dispatch({
				type: LIKE_POST,
				payload: updatedPost,
			});
		} catch (err) {
			console.log(err);
		}
	};

	// Unlike post
	const unlikePost = async (id) => {
		try {
			const updatedPost = await axios.delete(`/api/post/like/${id}`, {
				headers: {
					Authorization: `${localStorage.getItem("token")}`,
				},
			});

			await axios.delete(`/api/user/like/${id}`, {
				headers: {
					Authorization: `${localStorage.getItem("token")}`,
				},
			});

			dispatch({
				type: UNLIKE_POST,
				payload: updatedPost,
			});
		} catch (err) {
			console.log(err);
		}
	};

	// Comment on a post
	const addComment = async (comment) => {
		const reqBody = {
			text: comment
		};

		try {
			const res = await axios.post(
				`/api/comment/${state.current[0]._id}`,
				reqBody,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `${localStorage.getItem("token")}`,
					},
				}
			);

			dispatch({
				type: ADD_COMMENT,
				payload: res.data,
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<PostContext.Provider
			value={{
				current: state.current,
				posts: state.posts,
				comments: state.comments,
				getPosts,
				addPost,
				updatePost,
				deletePost,
				setCurrent,
				clearCurrent,
				likePost,
				unlikePost,
				addComment,
				fetchComments
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};

export default PostState;
