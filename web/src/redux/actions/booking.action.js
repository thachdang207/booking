import axios from "axios";
import {BOOK} from "../actionTypes";
import {setError, setLoading, setSuccess} from "./commonActions";

const url = process.env.REACT_APP_API_URL;

export const bookRoom = (dispatch, hotelId, token, bookData) => {
    setLoading(dispatch, true);
    axios({
        method: "POST",
        url: `${url}/customer/locations/${hotelId}/book`,
        headers: {Authorization: `Bearer ${token}`},
        data: {
            startTime: bookData.startTime,
            endTime: bookData.endTime,
            roomId: bookData.roomId,
        }
    })
        .then(async (response) => {
            await dispatch({
                type: BOOK,
                payload: {
                    bookData: response.data,
                }
            });
            setLoading(dispatch, false);
            setTimeout(() => {
                setSuccess(dispatch, null);
                setError(dispatch, null);
            }, 3000)

        })
        .catch(async (error) => {
            console.log(error.response.data.message)
            await dispatch({
                type: BOOK,
                payload: {
                    errors: error.response.data.message,
                }
            });
            setLoading(dispatch, false);
            setTimeout(() => {
                setSuccess(dispatch, null);
                setError(dispatch, null);
            }, 3000)
        });
};
