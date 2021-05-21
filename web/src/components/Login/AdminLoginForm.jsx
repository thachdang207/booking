/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from 'react';
import { useSecureLs } from '../Global/UseSecureLs'
import { useDispatch, useSelector } from 'react-redux'
import { AccountContext } from './accountContext';
import { adminLogin } from '../../redux/actions/auth.action'
import { useHistory } from 'react-router-dom'
import { Loading } from '../Global/Loading'
import ErrorMessage from '../Global/ErrorMessage'

import './Login.css'

function LoginForm(props) {

    const { switchToSignup, switchToSignin } = useContext(AccountContext);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [token, setToken] = useSecureLs("admin_token");
    const [userId, setUserId] = useSecureLs("admin_id");

    const handleSubmit = (e) => {
        e.preventDefault();
        adminLogin(dispatch, user, setToken, setUserId); //setIsAdmin
    }

    const history = useHistory();
    useEffect(() => {
        state.auth.isAuthenticated && history.push('/admin');
    }, [state.auth.isAuthenticated]);

    useEffect(() => {
        document.title = "VIBO | Login as an owner";
    }, []);

    return (
        <div className="inner-container">
            {state.auth.loading && <Loading />}
            {state.auth.success === false && (
                <ErrorMessage errors={state.auth.errors} />
            )}
            <div className="box-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <input
                        id="email"
                        type="email"
                        className="input"
                        aria-required="true"
                        placeholder="Email"
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                    <input
                        id="password"
                        type="password"
                        aria-required="true"
                        className="input"
                        placeholder="Password"
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                    <p className="muted-link">
                        Continue as a customer
                        <a
                            className="bold-link"
                            onClick={switchToSignin}
                        >
                            Sign in
                        </a>
                    </p>
                    <button className="submit-button" type="submit">
                        Sign in
                    </button>
                </form>
                <p className="muted-link">
                    Don't have an account yet?
                    <a
                        className="bold-link"
                        onClick={switchToSignup}
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
