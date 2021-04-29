import axios from "axios";
import {
    GET_ROOM,
    GET_SPECIFIC_ROOM,
} from "../actionTypes";
import { setLoading } from "./commonActions";

const url = process.env.REACT_APP_API_URL;

//-------------------------------------------------
export const getRoom = async (dispatch, hotelId) => {
    setLoading(dispatch, true);
    try {
        console.log(hotelId);
        const response = await axios.get(`${url}/customer/locations/${hotelId}`, {
            params : {
                join: ['locationType', 'city', 'rooms', 'serviceTypes'],
            }
        });
        dispatch({
            type: GET_ROOM,
            payload: response.data
        })
    } catch(error){
        console.log(error);
    }
};

export const getSpecificRoom = async (dispatch, roomId) => {
    setLoading(dispatch, true);
    try {
        const response = await axios.get(`${url}/customer/rooms/${roomId}`);
        dispatch({
            type: GET_SPECIFIC_ROOM,
            payload: response.data
        })
    } catch(error){
        console.log(error);
    }
};
