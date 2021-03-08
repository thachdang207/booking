/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext, useEffect} from 'react';
import {AccountContext} from './accountContext';

import './Login.css'

function SignupForm(props){

    const {switchToSignin} = useContext(AccountContext);

    useEffect(() =>{
        document.title = "VIBO | Sign up";
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
                    <input 
                        type="password" 
                        className="input"
                        placeholder="Confirm Password"
                    />
                </form>
                <p class="muted-link">
                    or sign up with
                </p>
                <button className="submit-button">
                    Login
                </button>
                <a href="#" className="muted-link">
                    Already have an account?
                    <a href="#" 
                        className="bold-link"
                        onClick={switchToSignin}
                    >
                        Sign-in
                    </a>
                </a>
            </div>
        </div>
    );
};

export default SignupForm;
