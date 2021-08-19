import {
    BOOK,
    SET_SUCCESS,
    SET_LOADING,
    SET_ERROR,
    CAPTURE_PAYMENT
} from "../actionTypes";

const initialState = {
    bookData: {},
    paymentInfo: {},
    success: null,
    errors: null,
    loading: false,
};

export default function book(state = initialState, action) {
    switch (action.type) {
        case BOOK: {
            return {
                ...state,
                bookData: action.payload.bookData,
                success: !action.payload.errors,
                errors: action.payload.errors,
            };
        }
        case CAPTURE_PAYMENT: {
            return {
                ...state,
                paymentInfo: action.payload
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            };
        }
        case SET_SUCCESS: {
            return {
                ...state,
                success: action.payload
            };
        }
        case SET_ERROR: {
            return {
                ...state,
                errors: action.payload
            };
        }
        default:
            return state;
    }
}
