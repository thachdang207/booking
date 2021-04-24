import axios from "axios";
import {
    GET_CITIES,
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