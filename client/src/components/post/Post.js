import React, { useState } from "react";

const Post = ({ post }) => {
    const { id, title, content, likes, dislikes } = post;

    const [state, setState] = useState({
        likes: likes,
        dislikes: dislikes
    })

    const handleLike = () => {
        setState({
            ...state,
            likes: state.likes + 1
        });
    }

    const handleDislike = () => {
        setState({
            ...state,
            dislikes: state.dislikes + 1
        })
    }

	return (
		<div class="card m-3" id={id}>
			<div class="card-body">
				<h5 class="card-title">
                    <a href="#!">{title}</a>
                </h5>
				<p class="card-text">
					{`${content.substring(0, 10)}...`}
				</p>
                <i className="fas fa-thumbs-up 2x m-2 likeIcon" onClick={handleLike} />{state.likes}
                <i className="fas fa-thumbs-down 2x m-2 likeIcon" onClick={handleDislike} />{state.dislikes}
			</div>
		</div>
	);
};

export default Post;
