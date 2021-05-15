import React, {useEffect, useState} from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import AdminLoginForm from "./AdminLoginForm"
import StaticHeader from '../Global/StaticHeader'
import { AccountContext } from "./accountContext";

import './Login.css'
import {useSelector} from "react-redux";

function Login() {
    const state = useSelector((state) => state);
    const [status, setStatus] = useState("signin");

    const switchToSignup = () => {
        setTimeout(() => {
            setStatus("signup");
        }, 100)
    }

    const switchToSignin = () => {
        setTimeout(() => {
            setStatus("signin");
        }, 100)
    }

    const switchToAdminLogin = () => {
        setTimeout(() => {
            setStatus("adminLogin");
        }, 100)
    }

    useEffect(() => {
        state.auth.errors = null;
    }, []);
    

    const contextValue = { switchToSignup, switchToSignin, switchToAdminLogin };

    return (
        <AccountContext.Provider value={contextValue}>
            <StaticHeader />
            <div className="login-container" data-aos="fade-up">
                <div className="top-container">
                    {status === "signin" && <div className="header-container">
                    <h1 className="header-text">
                            Welcome back
                    </h1>
                        <h3 className="small-text">
                            Please sign in to enjoy our services!
                    </h3>
                    </div>}
                    {status === "signup" && <div className="header-container">
                    
                    <h1 className="header-text">
                            Create an account
                    </h1>
                        <h3 className="small-text">
                            In order to access our services
                    </h3>
                    </div>}
                    {status === "adminLogin" && <div className="header-container">
                    <h1 className="header-text">
                            Connect us as an owner
                    </h1>
                        <h3 className="small-text">
                            To share your services!
                    </h3>
                    </div>}
                </div>
                {status === "signin" && <LoginForm />}
                {status === "signup" && <SignupForm />}
                {status === "adminLogin" && <AdminLoginForm />}
                <br/>
            </div>
        </AccountContext.Provider>
    );
}

export default Login;
