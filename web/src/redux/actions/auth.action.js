/* eslint-disable eqeqeq */
import {SIGN_UP, SIGN_IN, CHECK_AUTH, ADMIN_LOGIN} from "../actionTypes";
import {setLoading} from "./commonActions";
import axios from "axios";

//-----------------------------------------
const url = process.env.REACT_APP_API_URL;

export const signUp = (dispatch, user, setToken, setUserId) => {
    setLoading(dispatch, true);
    axios({
        method: "POST",
        url: `${url}/customer/auth/sign-up`,
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            fullName: user.fullName,
            email: user.email,
            address: user.address,
            city: user.city,
            password: user.password,
        }
    })
        .then(async (response) => {
            await setToken(
                response.data.success ? response.data.accessToken : null
            );
            await setUserId(
                response.data.success ? response.data.user.id : null
            );
            await dispatch({
                type: SIGN_UP,
                payload: {
                    user: response.data.user,
                    success: response.data.success,
                }
            });
            setLoading(dispatch, false);
        })
        .catch(async (error) => {
            setLoading(dispatch, false);
            await dispatch({
                type: SIGN_UP,
                payload: {
                    errors: error.response.data.message
                }
            });
        });
};
//-----------------------------------------

export const signIn = (dispatch, user, setToken, setUserId) => {
    setLoading(dispatch, true);
    axios({
        method: "POST",
        url: `${url}/customer/auth/sign-in`,
        headers: {
            "Content-Type": " application/json"
        },
        data: {
            email: user.email,
            password: user.password
        }
    })
        .then(async (response) => {
            await setToken(
                response.data.success ? response.data.accessToken : null
            );
            await setUserId(
                response.data.success ? response.data.user.id : null
            );
            localStorage.setItem("first_login", true);

            await dispatch({
                type: SIGN_IN,
                payload: {
                    user: response.data.user,
                    success: response.data.success,
                }
            });
            setLoading(dispatch, false);
        })
        .catch(async (e) => {
            await dispatch({
                type: SIGN_IN,
                payload: {
                    errors: e.response.data.message
                }
            });
            setLoading(dispatch, false);
        });
};
//-----------------------------------------

export let checkAuth;
checkAuth = async (dispatch, _token, userId) => {
    let token = _token;
    let user_id = userId;
    token != null && token !== "null" && token !== "" // eslint-disable-line
        ? await dispatch({
            type: CHECK_AUTH,
            payload: {
                isAuthenticated: true,
                user_id,
                token,
            }
        })
        : await dispatch({
            type: CHECK_AUTH,
            payload: {
                isAuthenticated: false,
                user_id: null,
                token: null,
            }
        });
};

//-----------------------------------------

export const adminLogin = (dispatch, user, setToken, setUserId) => {
    setLoading(dispatch, true);
    axios({
        method: "POST",
        url: `${url}/admin/auth/sign-in`,
        headers: {
            "Content-Type": " application/json"
        },
        data: {
            email: user.email,
            password: user.password
        }
    })
        .then(async (response) => {
            await setToken(
                response.data.success ? response.data.accessToken : null
            );
            await setUserId(
                response.data.success ? response.data.user.id : null
            );

            await dispatch({
                type: ADMIN_LOGIN,
                payload: {
                    user: response.data.user,
                    success: response.data.success,
                }
            });
            setLoading(dispatch, false);
        })
        .catch(async (error) => {
            setLoading(dispatch, false);
            await dispatch({
                type: ADMIN_LOGIN,
                payload: {
                    errors: error.response.data.message
                }
            });
        });
};
