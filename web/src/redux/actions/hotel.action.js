import axios from "axios";
import {
    GET_HOTEL,
    GET_ALL_HOTELS,
} from "../actionTypes";

const url = process.env.REACT_APP_API_URL;
//-----------------------------------------
export const getAllHotels = async (dispatch, page) => {
    try{
        const response = await axios.get(`${url}/customer/locations`,{
            params: {
                page: `${page}`,
            }
        });
        dispatch({
            type: GET_ALL_HOTELS,
            payload: response.data
        })
    }catch(error){
        console.log(error)
    }
};
//-----------------------------------------

export const getHotel = async (dispatch, id) => {
    try{
        const response = await axios.get(`${url}/customer/locations/${id}`);
        dispatch({
            type: GET_HOTEL,
            payload: response.data
        })
    }catch(error){
        console.log(error)
    }
};


