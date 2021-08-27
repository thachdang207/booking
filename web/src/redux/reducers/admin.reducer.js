import {
    SET_LOADING,
    SET_SUCCESS, GET_ADMIN_INFO, GET_ALL_BOOKING_INFO, GET_BOOKING_INFO, UPDATE_LOCATION
} from "../actionTypes";

const initialState = {
    success: null,
    bookings: [],
    room: null,
    pagination: {
        total: null,
        page_total: null,
    },
    user: null,
    errors: null,
    loading: false,
};

export default function admin(state = initialState, action) {
    switch (action.type) {
        case GET_ADMIN_INFO: {
            return {
                ...state,
                user: action.payload.user,
            };
        }
        case GET_ALL_BOOKING_INFO: {
            return {
                ...state,
                bookings: action.payload.results,
                total: action.payload.total,
                page_total: action.payload.page_total
            };
        }
        case GET_BOOKING_INFO: {
            return {
                ...state,
               room: action.payload.results,
               total: action.payload.total,
               page_total: action.payload.page_total
            };
        }
        case UPDATE_LOCATION: {
            return {
                ...state,
                success: action.payload.success,
                errors: action.payload.success ? null : action.payload.errors
            };
        }
        case SET_SUCCESS: {
            return {
                ...state,
                success: action.payload
            };
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            };
        }
        default:
            return state;
    }
}
