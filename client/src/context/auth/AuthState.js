import { useReducer } from 'react';
import axios from 'axios';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import { AUTH_FAIL, AUTH_SUCCESS, LOGOUT, USER_LOADED } from '../types';

const initialState = {
    authenticated: false,
    user: null,
    token: null
};

const AuthState = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Login user
    const login = async (user) => {
        try {
            // Make request
            const res = await axios.post('/api/auth/login', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            dispatch({
                type: AUTH_SUCCESS,
                payload: res.data
            })

            // loadUser();
        } catch (err) {
            dispatch({
                type: AUTH_FAIL
            })
            throw new Error(err.msg || err.message);
        }
    }

    // Register user
    const signup = async (user) => {
        try {
            // Make request
            const res = await axios.post('/api/auth/signup', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            dispatch({
                type: AUTH_SUCCESS,
                payload: res.data
            })

            // loadUser();
        } catch (err) {
            dispatch({
                type: AUTH_FAIL
            })
            throw new Error(err.msg || err.message);
        }
    }

    // Load user
    const loadUser = async () => {
        try {
            const res = await axios.get('/api/auth/user');

            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: AUTH_FAIL
            })
            throw new Error(err.msg || err.message);
        }
    }

    // Logout user
    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <AuthContext.Provider value={{
            authenticated: state.authenticated,
            user: state.user,
            token: state.user,
            login,
            signup,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;