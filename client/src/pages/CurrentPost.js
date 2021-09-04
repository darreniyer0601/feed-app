import React, { useContext, useState, useEffect } from "react";
import moment from "moment";
// import { useParams } from "react-router";

import PostContext from "../context/post/PostContext";

const CurrentPost = () => {
	// const { postId } = useParams();
	const postContext = useContext(PostContext);
	const [comment, setComment] = useState("");

	useEffect(() => {
	    postContext.fetchComments();
		// eslint-disable-next-line
	}, []);

	const { _id, title, content, displayName, createdAt } = postContext.current[0];
	const { comments, addComment, likePost, unlikePost } = postContext;

	const handleChange = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addComment(comment);
	};

	const [liked, setLiked] = useState(postContext.current.isLiked);

	const handleLike = async () => {
		// Send command to context
		await likePost(_id);
		setLiked(true);
	};

	const handleUnlike = async () => {
		// Send command to context
		await unlikePost(_id);
		setLiked(false);
	};

	return (
		<div>
			<div className="card text-center m-5">
				<div className="card-header">
					<h3>{title}</h3>
					<p className="text-muted display-name">
						{displayName}
						{" || "}
						{createdAt}
					</p>
				</div>
				<div className="card-body">{content}</div>
				<div className="card-footer d-flex flex-align-row justify-content-center">
					<button
						disabled={liked}
						className="btn btn-success m-2"
						onClick={handleLike}
					>
						Like Post
					</button>
					<button
						disabled={!liked}
						className="btn btn-warning m-2"
						onClick={handleUnlike}
					>
						Unlike Post
					</button>
				</div>
			</div>
			<div className="container">
				<form
					onSubmit={handleSubmit}
					className="m-2 row"
				>
					<div className="col-8 form-group mr-3">
						<input
							name="comment"
							type="text"
							className="form-control"
							required
							onChange={handleChange}
						/>
					</div>
					<div className="col-4">
						<button type="submit" className="btn btn-dark ml-3">
							Comment
						</button>
					</div>
				</form>
			</div>
			<div class="list-group d-flex m-4">
				{comments.map((comment) => (
					<div id={comment._id} class="list-group-item list-group-item-action flex-column align-items-start m-2">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">{comment.author}</h5>
							<small>{moment().startOf("hour").fromNow()}</small>
						</div>
						<p class="mb-1">{comment.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CurrentPost;
