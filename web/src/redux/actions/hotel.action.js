import axios from "axios";
import {
    GET_HOTELS,
} from "../actionTypes";

const url = process.env.REACT_APP_API_URL;
//-----------------------------------------
export const getHotels = (dispatch, page) => {
    axios(`${url}/customer/locations?page=${page}`)
        .then((response) => {
            dispatch({
                type: GET_HOTELS,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        });
};

