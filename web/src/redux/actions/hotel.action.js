import axios from "axios";
import {
    GET_HOTEL_IMAGES,
} from "../actionTypes";

const url = process.env.REACT_APP_BASE_URL;
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

