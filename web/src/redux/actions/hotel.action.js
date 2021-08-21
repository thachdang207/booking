import axios from "axios";
import {
    GET_HOTEL,
    GET_ALL_HOTELS,
    GET_PAGE_HOTELS,
    GET_CITY_HOTELS,
    GET_FILTER_HOTELS
} from "../actionTypes";
import {setLoading} from "./commonActions";

const url = process.env.REACT_APP_API_URL;
export const getAllHotels = (dispatch) => {
    axios.get(`${url}/customer/locations`, {
        params: {
            sort: 'score,DESC',
            join: ['locationType', 'city', 'rooms', 'serviceTypes'],
        }
    }).then(async (response) => {
        await dispatch({
            type: GET_ALL_HOTELS,
            payload: response.data
        })
    }).catch((e) => {
        console.log(e)
    })
};
//-----------------------------------------
export const getPageHotels = (dispatch, page) => {
    setLoading(dispatch, true);
    axios.get(`${url}/customer/locations`, {
        params: {
            page: `${page}`,
            sort: 'score,DESC',
            join: ['locationType', 'city', 'rooms', 'serviceTypes'],
            // fitler: "locationType.name||$eq||Homestay"
        }
    }).then(async (response) => {
        await dispatch({
            type: GET_PAGE_HOTELS,
            payload: response.data
        })
        setLoading(dispatch, false);
    }).catch((e) => {
        console.log(e)
    });
};
//-----------------------------------------

export const getHotel = async (dispatch, id) => {
    setLoading(dispatch, true);
    axios.get(`${url}/customer/locations/${id}`, {
        params: {
            join: ['locationType', 'city', 'rooms', 'serviceTypes'],
        }
    }).then(async (response) => {
        await dispatch({
            type: GET_HOTEL,
            payload: response.data
        });
        setLoading(dispatch, false);
    })
        .catch((error) => {
            console.log(error)
        })
};


//-----------------------------------------

export const getCityHotels = async (dispatch, cityId, page) => {
    setLoading(dispatch, true);
    try {
        const response = await axios.get(`${url}/customer/locations`, {
            params: {
                page: `${page}`,
                join: ['locationType', 'city', 'rooms', 'serviceTypes'],
                sort: 'score,DESC',
                filter: `cityId||$eq||${cityId}`
            }
        });
        dispatch({
            type: GET_CITY_HOTELS,
            payload: response.data
        })
        setLoading(dispatch, false);
    } catch (error) {
        console.log(error)
    }
};

export const getFilterHotels = async (dispatch, hotelName, page) => {
    setLoading(dispatch, true);
    try {
        const response = 
        await axios.get(`${url}/customer/locations?s={"name":{"$contL":${hotelName}}}`, 
        {
            params: {
                page: `${page}`,
                join: ['locationType', 'city', 'rooms', 'serviceTypes'],
                sort: 'score,DESC',
                // filter: `id||$eq||${"487292a4-d7a9-434f-b648-410cafa070c9"}`
            }
        });
        dispatch({
            type: GET_FILTER_HOTELS,
            payload: response.data
        })
        setLoading(dispatch, false);
    } catch (error) {
        console.log(error)
    }
};

