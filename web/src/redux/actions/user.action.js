import axios from "axios";
import {
    GET_USER,
    UPDATE_USER_INFO,
    UPDATE_USER_EMAIL,
    UPDATE_USER_PASSWORD
} from "../actionTypes";
import { setLoading } from "./commonActions";

const url = process.env.REACT_APP_API_URL;

//-----------------------------------------

export const getUser = (dispatch, token) => {
    axios(`${url}/customer/users/me`, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then((response) => {
            dispatch({
                type: GET_USER,
                payload: response.data.data
            });
        })
        .catch((error) => {});
};
// -----------------------------------------

export const updateUserInfo = (dispatch, token, formData) => {
    setLoading(dispatch, true);
    axios
        .post(
            `${url}/customer/users/${formData.get("id")}/update-personal-info`,
            formData,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
        .then((response) => {
            dispatch({
                type: UPDATE_USER_INFO,
                payload: response.data.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
            setLoading(dispatch, true);
        });
};
// -----------------------------------------

export const updateUserEmail = (
    dispatch,
    token,
    { email, newEmail, confirmNewEmail }
) => {
    setLoading(dispatch, true);

    axios
        .put(
            `${url}/customer/users/me/update-email`,
            {
                email,
                newEmail,
                confirmNewEmail
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
        .then((response) => {
            dispatch({
                type: UPDATE_USER_EMAIL,
                payload: response.data.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
            setLoading(dispatch, true);
        });
};
// -----------------------------------------

export const updateUserPassword = (
    dispatch,
    token,
    { password, newPassword, confirmNewPassword }
) => {
    setLoading(dispatch, true);

    axios
        .put(
            `${url}/customer/users/me/update-password`,
            {
                password,
                newPassword,
                confirmNewPassword
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
        .then((response) => {
            dispatch({
                type: UPDATE_USER_PASSWORD,
                payload: response.data.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
            setLoading(dispatch, true);
        });
};
