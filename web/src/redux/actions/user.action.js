import axios from "axios";
import {
    GET_USER,
    GET_BOOKING_HISTORIES,
    UPDATE_USER_INFO,
    UPDATE_USER_PASSWORD
} from "../actionTypes";
import {setLoading} from "./commonActions";

const url = process.env.REACT_APP_API_URL;

//-----------------------------------------

export const getUser = (dispatch, token) => {
    axios(`${url}/customer/users/me`, {
        headers: {Authorization: `Bearer ${token}`}
    })
        .then((response) => {
            dispatch({
                type: GET_USER,
                payload: {
                    user: response.data
                }
            });
        })
        .catch((error) => {
        });
};
// -----------------------------------------
export const getBookingHistories = (dispatch, token) => {
    axios(`${url}/customer/booking-histories`, {
        headers: {Authorization: `Bearer ${token}`,
        params: {
            "order": "createdAt",
        }
    }
    })
        .then((response) => {
            dispatch({
                type: GET_BOOKING_HISTORIES,
                payload: response.data.results
            });
        })
        .catch((error) => {
        });
};
// -----------------------------------------

export const updateUserInfo = (dispatch, token, userInfo) => {
    axios
        .put(
            `${url}/customer/users/me`,
            {
                email: userInfo.email,
                fullName: userInfo.fullName,
                address: userInfo.address,
                city: userInfo.city,
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
        .then((response) => {
            dispatch({
                type: UPDATE_USER_INFO,
                payload: response.data.data
            });
        })
        .catch((error) => {
        });
};
// -----------------------------------------

export const updateUserPassword = (
    dispatch,
    token,
    {password, newPassword, confirmNewPassword}
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
                headers: {Authorization: `Bearer ${token}`}
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
