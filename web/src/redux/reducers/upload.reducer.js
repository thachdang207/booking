import {
    SIGN_URL,
    CONFIRM_UPLOAD,
    SET_LOADING,
    SET_SUCCESS
} from "../actionTypes";

const initialState = {
    success: null,
    errors: null,
    loading: false,
    fileData: null,
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case SIGN_URL: {
            return {
                ...state,
                fileData: action.payload,
            };
        }
        case CONFIRM_UPLOAD: {
            return {
                ...state
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
