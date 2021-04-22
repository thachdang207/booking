import {
    GET_CITIES,
    SET_SUCCESS,
    SET_LOADING
} from "../actionTypes";

const initialState = {
    success: null,
    cities: [],
    errors: null,
    loading: false,
};

export default function city(state = initialState, action) {
    switch (action.type) {
        case GET_CITIES: {
            return {
                ...state,
                cities: action.payload.cities
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
