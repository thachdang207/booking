import axios from "axios";
import {
    GET_ROOM,
} from "../actionTypes";
import { setLoading } from "./commonActions";

const url = process.env.REACT_APP_API_URL;

//-------------------------------------------------
export const getRoom = async (dispatch, cityId) => {
    setLoading(dispatch, true);
    try{
        const response = await axios.get(`${url}/customer/locations`, {
            params : {
                limit: 10,
                sort: 'score,DESC',
                join: ['locationType', 'city', 'rooms', 'serviceTypes'],
                filter: `cityId||$eq||${cityId}`
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