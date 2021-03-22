import React, {useState} from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {AccountContext} from "./accountContext";

import styled from 'styled-components';
import {motion} from 'framer-motion';

import './Login.css'


const BackDrop = styled(motion.div)`
    width: 260%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    top: -330px;
    left: -150px;
    transform: rotate(60deg);
    background: rgb(34,193,195);
    background: linear-gradient(90deg, #2b5876 0%,  #4e4376 100%);
`;

const backDropVariants = {
    expanded: {
        width: '233%',
        height: '1050px',
        borderRadius: '20%',
        transform: 'rotate(60deg)'
    },
    collapsed: {
        width: '160%',
        height: '550px',
        borderRadius: '50%',
        transform: 'rotate(60deg)'
    }
}

const expandingTransition = {
    type: "spring",
    duration : 2.3,
    stiffness : 30,
}

function Login() {
    const [isExpanded, setExpanded] = useState(false);
    const [status, setStatus] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setStatus("signup");
        },400)
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setStatus("signin");
        },400)
    }

    const contextValue = {switchToSignup, switchToSignin};

    return (
        <AccountContext.Provider value={contextValue}>
        <div className="login-container">
            <div className="top-container">
                <BackDrop 
                        initial={false} 
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants ={backDropVariants}
                        transition={expandingTransition}
                />
                {status === "signin" && <div className="header-container">
                    <h2 className="header-text">
                        Welcome back
                    </h2>
                    <h4 className="small-text">
                        Please sign in to enjoy our services!
                    </h4>
                </div>}
                {status === "signup" && <div className="header-container">
                    <h1 className="header-text">
                        Create an account
                    </h1>
                    <h4 className="small-text">
                        In order to access our services
                    </h4>
                </div>}
            </div>
            {status === "signin" && <LoginForm />}
            {status === "signup" && <SignupForm />}
            <div>
                <a className= "muted-link" href="/">Back to Homepage</a>
            </div>
        </div>
        </AccountContext.Provider>
        
    );
}

export default Login;