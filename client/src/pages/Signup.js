import React, { useContext } from 'react'
import SignupForm from '../components/forms/SignupForm';
import AuthContext from '../context/auth/AuthContext';

const Signup = ({ history }) => {
    const { signup } = useContext(AuthContext);

    const signupHandler = async (user)  => {
        try {
            await signup(user);
            history.push('/');
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <SignupForm register={signupHandler} />
        </div>
    )
}

export default Signup
