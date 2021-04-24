import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import AdminLoginForm from "./AdminLoginForm"
import StaticHeader from '../Global/StaticHeader'
import { AccountContext } from "./accountContext";

import './Login.css'

function Login() {
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

    const contextValue = { switchToSignup, switchToSignin, switchToAdminLogin };

    return (
        <AccountContext.Provider value={contextValue}>
            <StaticHeader />
            <div className="login-container" data-aos="fade-up">
                <div className="top-container">
                    {status === "signin" && <div className="header-container">
                    <h2 className="header-text">
                            Welcome back
                    </h2>
                        <h4 className="small-text">
                            Please sign in to enjoy our services!
                    </h4>
                    </div>}
                    {status === "signup" && <div className="header-container">
                    
                    <h2 className="header-text">
                            Create an account
                    </h2>
                        <h4 className="small-text">
                            In order to access our services
                    </h4>
                    </div>}
                    {status === "adminLogin" && <div className="header-container">
                    <h2 className="header-text">
                            Connect us as an owner
                    </h2>
                        <h4 className="small-text">
                            To share your services!
                    </h4>
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