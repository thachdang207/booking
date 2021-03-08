/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext, useEffect} from 'react';
import {AccountContext} from './accountContext'

import './Login.css'

function LoginForm(props){

    const {switchToSignup} = useContext(AccountContext);

    useEffect(() =>{
        document.title = "VIBO | Login";
    });

    return (
        <div class="inner-container">
            <div className="box-container">
                <form className="form-container">
                    <input 
                        type="email" 
                        className="input"
                        placeholder="Email"
                    />
                    <input 
                        type="password" 
                        className="input"
                        placeholder="Password"
                    />
                </form>
                <p class="muted-link">
                    or sign up with
                </p>
                <a href="#" class="muted-link">
                    Forget your password
                </a>
                <button className="submit-button">
                    Login
                </button>
                <a href="#" className="muted-link">
                    Don't have an account yet?
                    <a href="#" 
                        className="bold-link"
                        onClick={switchToSignup}
                    >
                        Sign-up
                    </a>
                </a>
            </div>
        </div>
    );
};

export default LoginForm;
