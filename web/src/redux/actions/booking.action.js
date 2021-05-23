import axios from "axios";
import {BOOK} from "../actionTypes";
import {setLoading} from "./commonActions";

const url = process.env.REACT_APP_API_URL;

export const bookRoom = (dispatch, hotelId, token, bookData) => {
    setLoading(dispatch, true);
    axios({
        method: "POST",
        url: `${url}/customer/locations/${hotelId}/book`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
            startTime: bookData.startTime,
            endTime: bookData.endTime,
            roomId: bookData.roomId,
        }
    })
        .then((response) => {
            dispatch({
                type: BOOK,
                payload: {
                    bookData: response.data,
                    success: response.data.success,
                }
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
            console.log(error.response.data.message)
            dispatch({
                type: BOOK,
                payload: {
                    errors: error.response.data.message,
                }
            });
            setLoading(dispatch, false);
        });
};
