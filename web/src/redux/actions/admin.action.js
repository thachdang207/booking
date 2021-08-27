import {
    UPDATE_LOCATION,
    GET_ADMIN_INFO,
    GET_ALL_BOOKING_INFO,
    GET_BOOKING_INFO,
    RESPONSE_BOOKING_REQUEST,
    CREATE_ROOM,
    UPDATE_ROOM
} from '../actionTypes'
import axios from "axios";
import { setLoading } from "./commonActions";

//-----------------------------------------
const url = process.env.REACT_APP_API_URL;

export const getAdmin = async (dispatch, token) => {
    setLoading(dispatch, true);
    try {
        const response = await axios.get(`${url}/admin/users/me`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        dispatch({
            type: GET_ADMIN_INFO,
            payload: {
                user: response.data
            }
        });
        setLoading(dispatch, false);
    } catch (e) {
        console.error(e);
    }
};

export const getAllBookingInfo = async (dispatch, token, skip) => {
    setLoading(dispatch, true);
    try {
        const response = await axios.get(`${url}/admin/bookings`, {
            headers: { Authorization: `Bearer ${token}` },
            params: {
                order: "-createdAt",
                take: 10,
                skip: `${skip ? skip : 0}`,
            }
        })
        dispatch({
            type: GET_ALL_BOOKING_INFO,
            payload: response.data
        });
        setLoading(dispatch, false);
    }
    catch (e) {
        console.error(e);
    }
};

export const getBookingInfo = async (dispatch, token, id, skip) => {
    setLoading(dispatch, true);
    try{
        const response = await axios.get(`${url}/admin/room/${id}/bookings`,{
            headers: { Authorization: `Bearer ${token}` },
            params: {
                order: "-createdAt",
                take: 10,
                skip: `${skip ? skip : 0}`,
            }
        })
        dispatch({
            type: GET_BOOKING_INFO,
            payload: response.data
        })
        setLoading(dispatch, false);
    }catch(e){
        console.error(e);
    }
}

export const responseBookingRequests = (dispatch, token, bookingId, status) => {
    setLoading(dispatch, true);
    axios
        .put(`${url}/admin/bookings/${bookingId}`,
            {
                status: status
            },
            {
                headers: { Authorization: `Bearer ${token}` }
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

export const updateLocation = async (dispatch, token, locationData, locationId) => {
    setLoading(dispatch, true);
    try {
        const response = await axios({
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
        dispatch({
            type: UPDATE_LOCATION,
            payload: response.data
        });
        setLoading(dispatch, false);
    } catch (e) {
        console.log(e.message)
    }
};

export const createRoom = async (dispatch, token, roomData) => {
    setLoading(dispatch, true);
    try {
        const response = await axios
            .post(`${url}/admin/room/create`,
                {
                    name: roomData.name,
                    price: roomData.price,
                    description: roomData.description,
                    capacity: roomData.capacity,
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                })
        dispatch({
            type: CREATE_ROOM,
            payload: response.data
        });
        setLoading(dispatch, false);
    }
    catch (e) {
        console.error(e);
    }
}

export const updateRoom = async (dispatch, token, roomId, roomData) => {
    setLoading(dispatch, true);
    try {
        const response = await axios
            .put(`${url}/admin/room/${roomId}/update`,
                {
                    name: roomData.name,
                    price: roomData.price,
                    description: roomData.description,
                    capacity: roomData.capacity,
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                })
        dispatch({
            type: UPDATE_ROOM,
            payload: response.data
        });
        setLoading(dispatch, false);
    } catch (e) {
        console.error(e);
    }
}
