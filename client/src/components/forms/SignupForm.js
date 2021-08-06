import React, { useState } from "react";

const SignupForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.register(formData);
    }

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group m-3">
				<label>Name</label>
				<input
					name="name"
					type="text"
					className="form-control"
                    required
                    onChange={handleChange}
				/>
			</div>
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
                    minLength={5}
                    onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label>Confirm Password</label>
				<input
					name="password2"
					type="text"
					className="form-control"
                    required
                    onChange={handleChange}
				/>
			</div>
			<button type="submit" className="btn btn-dark">
				Sign Up
			</button>
		</form>
	);
};

export default SignupForm;
