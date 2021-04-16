/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { useSecureLs } from '../../components/UseSecureLs'
import { useDispatch, useSelector } from 'react-redux'
import { AccountContext } from './accountContext';
import { signUp } from '../../redux/actions/auth.action'
import { useHistory } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import { Checkbox } from 'antd'
import ErrorMessage from '../../components/ErrorMessage'

import './Login.css'
import JSONDATA from '../Home/data.json'


function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [token, setToken] = useSecureLs("token");
    const [userId, setUserId] = useSecureLs("user_id");
    // const [isAdmin, setIsAdmin] = useSecureLs("is_admin");

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        address: "",
        city: "",
        isAdmin: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(dispatch, user, setToken, setUserId); //setIsAdmin
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
        <div className="inner-container">
            {state.auth.loading && <Loading />}

            {state.auth.success === false && (
                <ErrorMessage errors={state.auth.errors} />
            )}
            <div className="box-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <input
                        id="fullName"
                        type="text"
                        className="input"
                        placeholder="Full name"
                        aria-required="true"
                        onChange={(e) =>
                            setUser({ ...user, fullName: e.target.value })
                        }
                    />
                    <input
                        id="email"
                        type="email"
                        className="input"
                        placeholder="Email"
                        aria-required="true"
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                    <input
                        id="address"
                        type="text"
                        className="input"
                        placeholder="Address"
                        aria-required="true"
                        onChange={(e) =>
                            setUser({ ...user, address: e.target.value })
                        }
                    />
                    <select
                        id="city"
                        placeholder="City"
                        className="input"
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
                    </select>
                    <input
                        id="password"
                        type="password"
                        className="input"
                        placeholder="Password"
                        aria-required="true"
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                    <Checkbox 
                        id="isAdmin"
                        onChange={(e) => 
                            setUser({...user, isAdmin: e.target.checked})}
                        className="py-2 justify-center"
                    >
                        <p className="text-lg font-sans">Connect with us as an owner 🤓</p>
                    </Checkbox>
                    <button className="submit-button" type="submit">
                        Create
                    </button>
                </form>
                <p className="muted-link">
                    Already have an account?
                        <a
                        className="bold-link"
                        onClick={switchToSignin}
                    >
                        Sign in
                        </a>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
