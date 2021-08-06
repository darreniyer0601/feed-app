import React, { useContext } from "react";
import LoginForm from '../components/forms/LoginForm';
import AuthContext from "../context/auth/AuthContext";

const Login = ({ history }) => {
	const { login } = useContext(AuthContext);

	const loginHandler = async (user) => {
		try {
			await login(user);
			history.push('/');
		} catch (err) {
			alert(err.message);
		}
	}

	return (
		<div className="d-flex justify-content-center align-items-center">
            <LoginForm login={loginHandler} />
        </div>
	);
};

export default Login;
