import React, { useState } from "react";

const PostForm = (props) => {
	const [formData, setFormData] = useState({
		title: "",
		content: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();

		props.addPost(formData)
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group m-3">
				<label>Title</label>
				<input
					name="title"
					type="text"
					className="form-control"
					required
					onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label>Content</label>
				<textarea
					name="content"
					type="text"
					className="form-control"
					required
                    rows={5}
					onChange={handleChange}
				/>
			</div>
            <div className="text-center">
                <button type="submit" className="btn btn-success">
                    Add Post
                </button>
            </div>
		</form>
	);
};

export default PostForm;
