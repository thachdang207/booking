import axios from "axios";
import {
    GET_HOTEL,
    GET_ALL_HOTELS,
    GET_CITY_HOTELS,
} from "../actionTypes";

const url = process.env.REACT_APP_API_URL;
//-----------------------------------------
export const getAllHotels = async (dispatch, page) => {
    try {
        const response = await axios.get(`${url}/customer/locations`, {
            params: {
                "page": `${page}`,
                "sort": 'score,DESC',
                "join": ['locationType', 'city', 'rooms', 'serviceTypes'],
            }
        });
        dispatch({
            type: GET_ALL_HOTELS,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
};
//-----------------------------------------

export const getHotel = async (dispatch, id) => {
    try {
        const response = await axios.get(`${url}/customer/locations/${id}`, {
            params: {
                join: ['locationType', 'city', 'rooms', 'serviceTypes'],
            }
        });
        dispatch({
            type: GET_HOTEL,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
};


//-----------------------------------------

export const getCityHotels = async (dispatch, cityId) => {
    try {
        const response = await axios.get(`${url}/customer/locations`, {
            params: {
                join: ['locationType', 'city', 'rooms', 'serviceTypes'],
                sort: 'score,DESC',
                filter: `cityId||$eq||${cityId}`
            }
        });
        dispatch({
            type: GET_CITY_HOTELS,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
};

