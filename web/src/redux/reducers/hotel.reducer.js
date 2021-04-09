import {
    GET_HOTELS,
    SET_SUCCESS,
    SET_LOADING
} from "../actionTypes";

const initialState = {
    success: null,
    hotels: [],
    errors: null,
    loading: false,
    pagination: {
        page: null,
        count: null,
        total: null,
    }
};

export default function hotel(state = initialState, action) {
    switch (action.type) {
        case GET_HOTELS: {
            return {
                ...state,
                hotels: action.payload.data,
                pagination: {
                    page: action.payload.page,
                    count: action.payload.count,
                    total: action.payload.total,
                }
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
