import {
    SET_LOADING,
    SET_SUCCESS, GET_ADMIN_INFO
} from "../actionTypes";

const initialState = {
    success: null,
    admin: null,
    errors: null
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case GET_ADMIN_INFO: {
            return {
                ...state,
                admin: action.payload.user,
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
