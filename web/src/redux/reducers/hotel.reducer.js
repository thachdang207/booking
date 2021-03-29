import {
    GET_FEATURED_HOTELS,
    GET_HOTEL_IMAGES,
    SET_SUCCESS,
    SET_LOADING
} from "../actionTypes";

const initialState = {
    success: null,
    featuredHotels: [],
    images: [],
    errors: null,
    loading: false,
};

export default function hotel(state = initialState, action) {
    switch (action.type) {
        case GET_HOTEL_IMAGES: {
            return {
                ...state,
                images: action.payload.images
            };
        }
        case GET_FEATURED_HOTELS: {
            return {
                ...state,
                featuredHotels: action.payload.hotels
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
