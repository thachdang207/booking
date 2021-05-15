import {UPDATE_LOCATION, GET_ADMIN_INFO, GET_BOOKING_REQUEST, RESPONSE_BOOKING_REQUEST} from '../actionTypes'
import axios from "axios";
import {setLoading} from "./commonActions";

//-----------------------------------------
const url = process.env.REACT_APP_API_URL;

export const getAdmin = (dispatch, token) => {
    axios(`${url}/admin/users/me`, {
        headers: {Authorization: `Bearer ${token}`}
    })
        .then((response) => {
            dispatch({
                type: GET_ADMIN_INFO,
                payload: {
                    user: response.data
                }
            });
        })
        .catch((error) => {
        });
};

export const getBookingRequests = (dispatch, token) => {
    axios(`${url}/admin/bookings`, {
        headers: {Authorization: `Bearer ${token}`}
    })
        .then((response) => {
            dispatch({
                type: GET_BOOKING_REQUEST,
                payload: response.data.results
            });
        })
        .catch((error) => {
        });
};

export const responseBookingRequests = (dispatch, token, bookingId, status) => {
    axios
        .put(`${url}/admin/bookings/${bookingId}`,
            {
                status,
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            })
        .then((response) => {
            dispatch({
                type: RESPONSE_BOOKING_REQUEST,
                payload: response.data.results
            });
        })
        .catch((error) => {
        });
}

//-----------------------------------------

export const updateLocation = (dispatch, token, locationData, locationId) => {
    setLoading(dispatch, true);
    axios({
        method: "PUT",
        url: `${url}/admin/locations/${locationId}`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
            name: locationData.name,
            address: locationData.address,
            city: locationData.city,
            locationTypeId: locationData.locationTypeId,
            contactPhoneNumber: locationData.contactPhoneNumber,
            contactEmail: locationData.contactEmail,
            price: locationData.price,
            description: locationData.description,
            workingTime: locationData.workingTime,
        }
    })
        .then((response) => {
            dispatch({
                type: UPDATE_LOCATION,
                payload: response.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
            setLoading(dispatch, true);
            console.log(error.message)
        });
};
