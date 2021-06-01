import {
    UPDATE_LOCATION,
    GET_ADMIN_INFO,
    GET_BOOKING_REQUEST,
    RESPONSE_BOOKING_REQUEST,
    CREATE_ROOM,
    UPDATE_ROOM
} from '../actionTypes'
import axios from "axios";
import {setLoading} from "./commonActions";

//-----------------------------------------
const url = process.env.REACT_APP_API_URL;

export const getAdmin = (dispatch, token) => {
    setLoading(dispatch, true);
    axios(`${url}/admin/users/me`, {
        headers: {Authorization: `Bearer ${token}`}
    })
        .then( async (response) => {
            await dispatch({
                type: GET_ADMIN_INFO,
                payload: {
                    user: response.data
                }
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
        });
};

export const getBookingRequests = (dispatch, token) => {
    setLoading(dispatch, true);
    axios(`${url}/admin/bookings`, {
        headers: {Authorization: `Bearer ${token}`}
    })
        .then(async (response) => {
            await dispatch({
                type: GET_BOOKING_REQUEST,
                payload: response.data.results
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
        });
};

export const responseBookingRequests = (dispatch, token, bookingId, status) => {
    setLoading(dispatch, true);
    axios
        .put(`${url}/admin/bookings/${bookingId}`,
            {
                status,
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            })
        .then(async (response) => {
            setLoading(dispatch, false);
            await dispatch({
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
        .then(async (response) => {
            await dispatch({
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

export const createRoom = (dispatch, token, roomData) => {
    setLoading(dispatch, true);
    axios
        .post(`${url}/admin/room/create`,
            {
                name: roomData.name,
                price: roomData.price,
                description: roomData.description,
                capacity: roomData.capacity,
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            })
        .then(async (response) => {
            await dispatch({
                type: CREATE_ROOM,
                payload: response.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
        });
}

export const updateRoom = (dispatch, token, roomId, roomData) => {
    setLoading(dispatch, true);
    axios
        .put(`${url}/admin/room/${roomId}/update`,
            {
                name: roomData.name,
                price: roomData.price,
                description: roomData.description,
                capacity: roomData.capacity,
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            })
        .then(async (response) => {
            await dispatch({
                type: UPDATE_ROOM,
                payload: response.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
        });
}
