/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from 'react';
import {useSecureLs} from '../Global/UseSecureLs'
import {useDispatch, useSelector} from 'react-redux'
import {AccountContext} from './accountContext';
import {signUp} from '../../redux/actions/auth.action'
import {useHistory} from 'react-router-dom'
import {Loading} from '../Global/Loading'
import {ErrorMessage} from '../Global/ErrorMessage'

import './Login.css'
import JSONDATA from '../Home/data.json'


function SignupForm(props){
    const {switchToSignin} = useContext(AccountContext);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    // eslint-disable-next-line no-unused-vars
    const [token, setToken] = useSecureLs("token");
    // eslint-disable-next-line no-unused-vars
    const [userId, setUserId] = useSecureLs("token");

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        city: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(dispatch, user, setToken, setUserId);
    };

    const history = useHistory();
    useEffect(() => {
        if (state.auth.isAuthenticated){
            history.push("/");
        }
    })

    useEffect(() =>{
        document.title = "VIBO | Sign up";
    });

    return (
        <div class="inner-container">
            {state.auth.loading && <Loading />}

            {state.auth.success === false && (
                <ErrorMessage errors={state.auth.errors} />
            )}
            <div className="box-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <input
                        id="name"
                        type="text" 
                        className="input"
                        placeholder="Full name"
                        aria-required="true"
                        onChange={(e) => 
                            setUser({ ...user, name: e.target.value})
                        }
                    />
                    <input
                        id="email"
                        type="email" 
                        className="input"
                        placeholder="Email"
                        aria-required="true"
                        onChange={(e) => 
                            setUser({...user, email: e.target.value})
                        }
                    />
                    <input
                        id="address"
                        type="text" 
                        className="input"
                        placeholder="Address"
                        aria-required="true"
                        onChange={(e) => 
                            setUser({...user, address: e.target.value})
                        }
                    />
                    <select
                        id="city"
                        placeholder="City"
                        className="input"
                        aria-required="true"
                        onChange={(e) => 
                            setUser({...user, city: e.target.value})
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
                            setUser({...user, password: e.target.value})
                        }
                    />
                    <button className="submit-button" type="submit">
                        Tạo tài khoản
                    </button>
                </form>
                <a className="muted-link">
                        Bạn đã có tài khoản rồi?
                        <a 
                            className="bold-link"
                            onClick={switchToSignin}
                        >
                            Đăng nhập
                        </a>
                </a>
            </div>
        </div>
    );
};

export default SignupForm;
