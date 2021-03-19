/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from 'react';
import {useSecureLs} from '../Global/UseSecureLs'
import {useDispatch, useSelector} from 'react-redux'
import {AccountContext} from './accountContext';
import {signIn} from '../../redux/actions/auth.action'
import {useHistory} from 'react-router-dom'
import {Loading} from '../Global/Loading'
import {ErrorMessage} from '../Global/ErrorMessage'

import './Login.css'

function LoginForm(props){

    const {switchToSignup} = useContext(AccountContext);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [user ,setUser] = useState({
        email: "",
        password: "",
    })

    // eslint-disable-next-line no-unused-vars
    const [token, setToken] = useSecureLs("token");
    // eslint-disable-next-line no-unused-vars
    const [userId, setUserId] = useSecureLs("user_id");

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(dispatch, user, setToken, setUserId);
    }

    const history = useHistory();
    useEffect(() => {
        state.auth.isAuthenticated && history.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.auth.isAuthenticated]);

    useEffect(() =>{
        document.title = "VIBO | Login";
    });

    return (
        <div class="inner-container">
            {state.auth.loading && <Loading />}
            {state.auth.success === false && (
                <ErrorMessage erros={state.auth.errors} />
            )}
            <div className="box-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <input
                        id="email"
                        type="email" 
                        className="input"
                        aria-required="true"
                        placeholder="Email"
                        onChange={(e) =>
                            setUser({...user, email: e.target.value})
                        }
                    />
                    <input
                        id="password"
                        type="password"
                        aria-required="true" 
                        className="input"
                        placeholder="Password"
                        onChange={(e) =>
                            setUser({...user, password: e.target.value})
                        }
                    />
                    <a href="#" class="muted-link">
                        Quên mật khẩu
                    </a>
                    <button className="submit-button" type="submit">
                        Đăng nhập
                    </button>
                </form>
                <a href="#" className="muted-link">
                    Chưa có tài khoản ư?
                    <a href="#" 
                        className="bold-link"
                        onClick={switchToSignup}
                    >
                        Tạo tài khoản
                    </a>
                </a>
            </div>
        </div>
    );
};

export default LoginForm;
