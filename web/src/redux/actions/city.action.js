import axios from "axios";
import {
    GET_CITIES,
    GET_LOCATION_TYPES,
} from "../actionTypes";

const url = process.env.REACT_APP_API_URL;
//-----------------------------------------
export const getCities = (dispatch) => {
    axios.get(`${url}/app/config`)
        .then(async (response) => {
            await dispatch({
                type: GET_CITIES,
                payload: response.data
            });
        })
        .catch((error) => {
        });
};

//-----------------------------------------
export const getLocationTypes = (dispatch) => {
    axios.get(`${url}/app/config`)
        .then(async (response) => {
            await dispatch({
                type: GET_LOCATION_TYPES,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
};
