import React, { useState } from "react";

const LoginForm = (props) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.login(formData);
	};

	return (
		<form onSubmit={handleSubmit} className="">
			<div className="form-group m-3">
				<label>Email</label>
				<input
					name="email"
					type="email"
					className="form-control"
					required
					onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label>Password</label>
				<input
					name="password"
					type="text"
					className="form-control"
					required
					onChange={handleChange}
				/>
			</div>
			<div className="text-center">
				<button type="submit" className="btn btn-dark">
					Login
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
