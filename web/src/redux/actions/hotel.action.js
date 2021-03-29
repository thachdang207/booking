import axios from "axios";
import {
    GET_HOTEL_IMAGES,
    GET_FEATURED_HOTELS,
} from "../actionTypes";

const url = process.env.REACT_APP_API_URL;
//-----------------------------------------
export const getHotelImages = (dispatch) => {
    axios(`${url}/hotels/images`)
        .then((response) => {
            dispatch({
                type: GET_HOTEL_IMAGES,
                payload: response.data.data
            });
        })
        .catch((error) => {});
};
//-----------------------------------------
export const getFeaturedHotels = (dispatch) => {
    axios(`${url}/hotels`)
        .then((response) => {
            dispatch({
                type: GET_FEATURED_HOTELS,
                payload: response.data.data
            });
        })
        .catch((error) => {});
};

