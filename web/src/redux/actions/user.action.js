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
    setLoading(dispatch, true);
    axios(`${url}/customer/users/me`, {
        headers: {Authorization: `Bearer ${token}`}
    })
        .then(async (response) => {
            await dispatch({
                type: GET_USER,
                payload: {
                    user: response.data
                }
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
        });
};
// -----------------------------------------
export const getBookingHistories = (dispatch, token, skip) => {
    setLoading(dispatch, true);
    axios(`${url}/customer/booking-histories`,
        {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            order: "-createdAt",
            take: 10,
            skip: `${skip ? skip : 0}`
        }
    })
        .then(async (response) => {
            await dispatch({
                type: GET_BOOKING_HISTORIES,
                payload: response.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
        });
};
// -----------------------------------------

export const updateUserInfo = async (dispatch, token, userInfo) => {
    setLoading(dispatch, true);
    try{
        const response = await  axios
        .put(
            `${url}/customer/users/me`,
            {
                avatar: userInfo.avatar,
                fullName: userInfo.fullName,
                address: userInfo.address,
                city: userInfo.city,
                phoneNumber: userInfo.phoneNumber,
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
        dispatch({
            type: UPDATE_USER_INFO,
            payload: response.data
        });
        setLoading(dispatch, false);
    }catch(e){
        console.error(e);
    }
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
        .then(async (response) => {
            await dispatch({
                type: UPDATE_USER_PASSWORD,
                payload: response.data.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
            setLoading(dispatch, true);
        });
};
