import {
    GET_USER,
    UPDATE_USER_INFO,
    UPDATE_USER_PASSWORD,
    SET_LOADING,
    SET_SUCCESS, GET_BOOKING_HISTORIES
} from "../actionTypes";

const initialState = {
    success: null,
    bookings: [],
    user: null,
    errors: null,
    loading: false,
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case GET_USER: {
            return {
                ...state,
                user: action.payload.user,
            };
        }
        case GET_BOOKING_HISTORIES: {
            return {
                ...state,
                bookings: action.payload,
            };
        }
        case UPDATE_USER_INFO: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.success ? action.payload.user : null,
                errors: action.payload.success ? null : action.payload.errors
            };
        }
        case UPDATE_USER_PASSWORD: {
            return {
                ...state,
                success: action.payload.success,
                user: action.payload.success ? action.payload.user : null,
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
