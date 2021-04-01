/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from 'react';
import {useSecureLs} from '../GlobalComponents/UseSecureLs'
import {useDispatch, useSelector} from 'react-redux'
import {AccountContext} from './accountContext';
import {signIn} from '../../redux/actions/auth.action'
import {useHistory} from 'react-router-dom'
import {Loading} from '../GlobalComponents/Loading'
import {ErrorMessage} from '../GlobalComponents/ErrorMessage'

import './Login.css'

function LoginForm(props){

    const {switchToSignup} = useContext(AccountContext);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [user ,setUser] = useState({
        email: "",
        password: "",
    })

    const [token, setToken] = useSecureLs("token");
    const [userId, setUserId] = useSecureLs("user_id");
    // const [isAdmin, setIsAdmin] = useSecureLs("is_admin");

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(dispatch, user, setToken, setUserId); //setIsAdmin
    }

    const history = useHistory();
    useEffect(() => {
        state.auth.isAuthenticated && history.push('/');
    }, [state.auth.isAuthenticated]);

    useEffect(() =>{
        document.title = "VIBO | Login";
    },[]);

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
                            setUser({...user, email: e.target.value})
                        }
                    />
                    <input
                        id="password"
                        type="password"
                        aria-required="true" 
                        className="input"
                        placeholder="Password"
                        onChange={(e) =>
                            setUser({...user, password: e.target.value})
                        }
                    />
                    <a className="muted-link">
                        Forgot password?
                    </a>
                    <button className="submit-button" type="submit">
                        Sign in
                    </button>
                </form>
                <a className="muted-link">
                    Don't have an account yet?
                    <a
                        className="bold-link"
                        onClick={switchToSignup}
                    >
                        Sign up
                    </a>
                </a>
            </div>
        </div>
    );
};

export default LoginForm;
