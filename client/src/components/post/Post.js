import React from "react";

const Post = ({ post }) => {
	const { id, title, likes, displayName, comments } = post;

	return (
		<div class="card m-3" id={id}>
			<div class="card-header">
				<a href={`/post/${id}`} className="post-header">{title}</a>
			</div>
			<div class="card-body">
				<p class="card-text text-muted display-name">{`Posted by ${displayName}`}</p>
				<i className="fas fa-thumbs-up 2x m-2" />
				{likes}
				<i className="fas fa-comment 2x m-2" />
				{comments}
			</div>
		</div>
	);
};

export default Post;
