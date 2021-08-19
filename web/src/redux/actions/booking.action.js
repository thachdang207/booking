import axios from "axios";
import { BOOK, CAPTURE_PAYMENT } from "../actionTypes";
import { setError, setLoading, setSuccess } from "./commonActions";

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
      returnUrl: bookData.returnUrl,
      cancelUrl: bookData.cancelUrl,
    },
  })
    .then(async (response) => {
      await dispatch({
        type: BOOK,
        payload: {
          bookData: response.data,
        },
      });
      setLoading(dispatch, false);
    })
    .catch(async (error) => {
      await dispatch({
        type: BOOK,
        payload: {
          errors: error.response.data.message,
        },
      });
      setLoading(dispatch, false);
    });
};

export default async function capturePayment(dispatch, roomId, bookingId, token) {
  try {
    const res = await  axios({
        method: "POST",
        url: `${url}/customer/locations/${roomId}/bookings/${bookingId}/capture-payment`,
        headers: { Authorization: `Bearer ${token}` },
    })
    dispatch({
        type: CAPTURE_PAYMENT,
        payload: res.data
    })
  } catch (e) {
      console.error(e)
  }
}
