import {
    GET_FEATURED_HOTELS,
    SET_SUCCESS,
    SET_LOADING
} from "../actionTypes";

const initialState = {
    success: null,
    featuredHotels: [],
    errors: null,
    loading: false,
};

export default function hotel(state = initialState, action) {
    switch (action.type) {
        case GET_FEATURED_HOTELS: {
            return {
                ...state,
                featuredHotels: action.payload.data
            };
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
        default:
            return state;
    }
}
