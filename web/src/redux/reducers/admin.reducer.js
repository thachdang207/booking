import {
    SET_LOADING,
    SET_SUCCESS, GET_ADMIN_INFO, GET_BOOKING_REQUEST, UPDATE_LOCATION
} from "../actionTypes";

const initialState = {
    success: null,
    requests: [],
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
        case GET_BOOKING_REQUEST: {
            return {
                ...state,
                requests: action.payload,
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
