import axios from "axios";
import {
    GET_AVAILABLE_ROOM,
    GET_ROOM,
    GET_SPECIFIC_ROOM,
} from "../actionTypes";
import {setLoading} from "./commonActions";

const url = process.env.REACT_APP_API_URL;

//-------------------------------------------------
export const getRoom = (dispatch, hotelId) => {
    setLoading(dispatch, true);
    axios.get(`${url}/customer/locations/${hotelId}`, {
        params: {
            join: ['locationType', 'city', 'rooms', 'serviceTypes'],
        }
    }).then(async (response) => {
        await dispatch({
            type: GET_ROOM,
            payload: response.data
        })
        setLoading(dispatch, false);
    })
        .catch((error) => {
            console.log(error);
        })
};

export const getSpecificRoom = (dispatch, roomId) => {
    setLoading(dispatch, true);
    axios.get(`${url}/customer/rooms/${roomId}`).then(async (response) => {
        await dispatch({
            type: GET_SPECIFIC_ROOM,
            payload: response.data
        })
        setLoading(dispatch, false)
    })
        .catch((error) => {
            console.log(error);
        })
};

export const getAvailableRoom = (dispatch, locationId, startTime, endTime) => {
    setLoading(dispatch, true);
    axios.get(`${url}/customer/locations/${locationId}/bookings`, {
        params: {
            startTime: startTime,
            endTime: endTime,
        }
    })
        .then(async (response) => {
            await dispatch({
                type: GET_AVAILABLE_ROOM,
                payload: response.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
        });
};
