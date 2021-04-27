import axios from "axios";
import {
    GET_CITIES,
    GET_LOCATION_TYPES,
} from "../actionTypes";

const url = process.env.REACT_APP_API_URL;
//-----------------------------------------
export const getCities = async (dispatch) => {
    try{
        const response = await axios.get(`${url}/app/config`);
        dispatch({
            type: GET_CITIES,
            payload: response.data
        })
    }catch(error){
        console.log(error)
    }
};

//-----------------------------------------
export const getLocationTypes = async (dispatch) => {
    try{
        const response = await axios.get(`${url}/app/config`);
        dispatch({
            type: GET_LOCATION_TYPES,
            payload: response.data
        })
    }catch(error){
        console.log(error)
    }
};
