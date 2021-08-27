import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import AdminLoginForm from "./AdminLoginForm"
import StaticHeader from '../Global/StaticHeader'
import Footer from "../Global/Footer"
import styled from "styled-components";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { useSelector } from "react-redux";

const BoxContainer = styled.div`
  width: 28rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin: 3rem auto 7rem auto;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 45rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  z-index: 1;
  top: -380px;
  left: -200px;
  background: rgb(75, 0, 150);
  background: linear-gradient(
    58deg,
    rgba(75, 0, 150) 20%,
    rgba(120, 0, 255) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3rem 0 0 1rem;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h4`
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  z-index: 10;
  margin: 0.5rem 0 2rem 0;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "240%",
        height: "1200px",
        borderRadius: "20%",
        transform: "rotate(60deg)",
    },
    collapsed: {
        width: "160%",
        height: "540px",
        borderRadius: "50%",
        transform: "rotate(60deg)",
    },
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};


function Login() {
    const [isExpanded, setExpanded] = useState(false);
    const state = useSelector((state) => state);
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
        }, 100)
    }

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setStatus("signin");
        }, 100)
    }

    const switchToAdminLogin = () => {
        playExpandingAnimation();
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
            <BoxContainer>
                <TopContainer>
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants={backdropVariants}
                        transition={expandingTransition}
                    />
                    {status === "signin" &&
                        <HeaderContainer>
                            <HeaderText>
                                Welcome back
                            </HeaderText>
                            <SmallText>
                                Please sign in to enjoy our services!
                            </SmallText>
                        </HeaderContainer>}
                    {status === "signup" &&
                        <HeaderContainer>
                            <HeaderText>
                                Create an account
                            </HeaderText>
                            <SmallText>
                                In order to access our services
                            </SmallText>
                        </HeaderContainer>}
                    {status === "adminLogin" &&
                        <HeaderContainer>
                            <HeaderText>
                                Join us as an owner
                            </HeaderText>
                            <SmallText>
                                To share your services!
                            </SmallText>
                        </HeaderContainer>}
                </TopContainer>
                <InnerContainer>
                    {status === "signin" && <LoginForm />}
                    {status === "signup" && <SignupForm />}
                    {status === "adminLogin" && <AdminLoginForm />}
                </InnerContainer>
                <br />
            </BoxContainer>
            <Footer />
        </AccountContext.Provider>
    );
}

export default Login;
