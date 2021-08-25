import React, { useState, useContext, useEffect } from 'react';
import { useSecureLs } from '../Global/UseSecureLs'
import { useDispatch, useSelector } from 'react-redux'
import { AccountContext } from './accountContext';
import { signUp } from '../../redux/actions/auth.action'
import { useHistory } from 'react-router-dom'
import { Loading } from '../Global/Loading'
import ErrorMessage from '../Global/ErrorMessage'
import JSONDATA from '../Home/data.json'
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
    Select,
} from "./common";


function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [token, setToken] = useSecureLs("token");
    const [userId, setUserId] = useSecureLs("user_id");

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        address: "",
        city: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(dispatch, user, setToken, setUserId);
        console.log("Submit: ", user);
    };

    const history = useHistory();
    useEffect(() => {
        if (state.auth.isAuthenticated) {
            history.push("/");
        } else {
            history.push("/login");
        }
    }, [state.auth.token])

    useEffect(() => {
        document.title = "VIBO | Sign up";
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
                        id="fullName"
                        type="text"
                        placeholder="Full name"
                        aria-required="true"
                        onChange={(e) =>
                            setUser({ ...user, fullName: e.target.value })
                        }
                    />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        aria-required="true"
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                    <Input
                        id="address"
                        type="text"
                        placeholder="Address"
                        aria-required="true"
                        onChange={(e) =>
                            setUser({ ...user, address: e.target.value })
                        }
                    />
                    <Select
                        id="city"
                        placeholder="City"
                        type="select"
                        aria-required="true"
                        onChange={(e) =>
                            setUser({ ...user, city: e.target.value })
                        }
                    >
                        <option value="all">All Cities</option>
                        {
                            JSONDATA.map((val, key) => {
                                return (
                                    <option value={val.city} key={key}>
                                        {val.city}
                                    </option>
                                );
                            })}
                    </Select>
                    <Input
                        id="password"
                        type="password"
                        className="input"
                        placeholder="Password"
                        aria-required="true"
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                    <div className="mt-3 mb-2">

                    </div>
                    <SubmitButton type="submit">
                        Create
                    </SubmitButton>
                </FormContainer>
                <div className="mt-2">
                    <MutedLink>
                        Already have an account?
                        <BoldLink
                            onClick={switchToSignin}
                        >
                            Sign in
                        </BoldLink>
                    </MutedLink>
                </div>
            </BoxContainer>
        </>
    );
};

export default SignupForm;
