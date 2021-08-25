import React, { useState, useContext, useEffect } from 'react';
import { useSecureLs } from '../Global/UseSecureLs'
import { useDispatch, useSelector } from 'react-redux'
import { AccountContext } from './accountContext';
import { signIn } from '../../redux/actions/auth.action'
import { useHistory } from 'react-router-dom'
import { Loading } from '../Global/Loading'
import ErrorMessage from '../Global/ErrorMessage'
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";

function LoginForm() {

    const { switchToSignup, switchToAdminLogin } = useContext(AccountContext);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [token, setToken] = useSecureLs("token");
    const [userId, setUserId] = useSecureLs("user_id");

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(dispatch, user, setToken, setUserId); //setIsAdmin
    }

    const history = useHistory();
    useEffect(() => {
        state.auth.isAuthenticated && history.push('/');
    }, [state.auth.isAuthenticated]);

    useEffect(() => {
        document.title = "VIBO | Login";
    }, []);

    return (
        <>
            {state.auth.loading && <Loading />}
            {state.auth.success === false && (
                <ErrorMessage errors={state.auth.errors} />
            )}
            <BoxContainer>
                <FormContainer onSubmit={handleSubmit}>
                    <Input
                        id="email"
                        type="email"
                        aria-required="true"
                        placeholder="Email"
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                    <Input
                        id="password"
                        type="password"
                        aria-required="true"
                        placeholder="Password"
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                    <div className="flex flex-row items-center justify-center mt-5 mb-2">
                        <MutedLink>
                            Connect with us as an owner?
                            <BoldLink
                                onClick={switchToAdminLogin}
                            >
                                Sign in
                            </BoldLink>
                        </MutedLink>
                    </div>
                    <SubmitButton type="submit">
                        Sign in
                    </SubmitButton>
                </FormContainer>
                <div className="mt-2">
                    <MutedLink>
                        Don't have an account yet?
                        <BoldLink
                            onClick={switchToSignup}
                        >
                            Sign up
                        </BoldLink>
                    </MutedLink>
                </div>
            </BoxContainer>
        </>
    );
};

export default LoginForm;
