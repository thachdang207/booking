import {GET_ADMIN_INFO } from '../actionTypes'
import axios from "axios";

//-----------------------------------------
const url = process.env.REACT_APP_API_URL;

export const getAdmin = (dispatch, token) => {
    axios(`${url}/admin/users/me`, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then((response) => {
            dispatch({
                type: GET_ADMIN_INFO,
                payload: {
                    user: response.data
                }
            });
        })
        .catch((error) => {});
};
