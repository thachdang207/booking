/* eslint-disable eqeqeq */
import {SADMIN_SIGN_IN, SADMIN_CHECK_AUTH, CREATE_OWNER} from '../actionTypes'
import { setLoading } from "./commonActions";
import axios from "axios";

//-----------------------------------------
const url = process.env.REACT_APP_API_URL;

export const signIn = (dispatch, user, setToken, setUserId) => {
    setLoading(dispatch, true);
    axios({
        method: "POST",
        url: `${url}/super-admin/auth/sign-in`,
        headers: {
            "Content-Type": " application/json"
        },
        data: {
            email: user.email,
            password: user.password
        }
    })
        .then(async (response) => {
            setToken(
                response.data.success ? response.data.accessToken : null
            );
            setUserId(
                response.data.success ? response.data.user.id : null
            );

            await dispatch({
                type: SADMIN_SIGN_IN,
                payload: {
                    user: response.data.user,
                    success: response.data.success,
                    errors: response.data.errors,
                }
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
            console.log(error);
        });
};
//-----------------------------------------

export let checkAuth;
checkAuth = async (dispatch, _token, _sAdmin_id) => {
    let sAdmin_token = _token;
    let sAdmin_id = _sAdmin_id;
    sAdmin_token != null && sAdmin_token !== "null" && sAdmin_token !== ""
        ? await dispatch({
            type: SADMIN_CHECK_AUTH,
            payload: {
                isAuthenticated: true,
                sAdmin_id,
                sAdmin_token,
            }
        })
        : await dispatch({
            type: SADMIN_CHECK_AUTH,
            payload: {
                isAuthenticated: false,
                sAdmin_id: null,
                sAdmin_token: null,
            }
        });
};

export const createOwner = (dispatch, token, user, setToken, setUserId) => {
    setLoading(dispatch, true);
    axios({
        method: "POST",
        url: `${url}/super-admin/users`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            locationId: user.locationId,
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
                type: CREATE_OWNER,
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
                type: CREATE_OWNER,
                payload: {
                    errors: error.response.data.message
                }
            });
        });
};

