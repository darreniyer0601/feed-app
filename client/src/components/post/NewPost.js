import React, { useState } from "react";

const NewPost = () => {
	const [formData, setFormData] = useState({
		title: "",
		content: "",
		image: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFileChange = (e) => {
		setFormData({
			...formData,
			image: e.target.files[0],
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();

		console.log(formData);
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
            <div className="form-group m-3">
                <label>Add an Image</label>
                <input type="file" className="form-control" onChange={handleFileChange} />
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-success">
                    Add Post
                </button>
            </div>
		</form>
	);
};

export default NewPost;
