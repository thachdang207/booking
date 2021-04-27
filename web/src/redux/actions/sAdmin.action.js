/* eslint-disable eqeqeq */
import {SADMIN_SIGN_IN, SADMIN_CHECK_AUTH, CREATE_LOCATION} from '../actionTypes'
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
        .then((response) => {
            setToken(
                response.data.success ? response.data.accessToken : null
            );
            setUserId(
                response.data.success ? response.data.user.id : null
            );

            dispatch({
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
checkAuth = (dispatch, _token, _sAdmin_id) => {
    let sAdmin_token = _token;
    let sAdmin_id = _sAdmin_id;
    sAdmin_token != null && sAdmin_token !== "null" && sAdmin_token !== ""
        ? dispatch({
            type: SADMIN_CHECK_AUTH,
            payload: {
                isAuthenticated: true,
                sAdmin_id,
                sAdmin_token,
            }
        })
        : dispatch({
            type: SADMIN_CHECK_AUTH,
            payload: {
                isAuthenticated: false,
                sAdmin_id: null,
                sAdmin_token: null,
            }
        });
};
//-----------------------------------------

export const createLocation = (dispatch, token, formData) => {
    setLoading(dispatch, true);
    axios
        .post(
            `${url}/super-admin/locations`,formData,{
                headers: { Authorization: `Bearer ${token}` },
                "Content-Type": ` application/json`
            })
        .then((response) => {
            dispatch({
                type: CREATE_LOCATION,
                payload: response.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
            setLoading(dispatch, true);
        });
};

