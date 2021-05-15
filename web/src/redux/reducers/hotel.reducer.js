import {
    GET_HOTEL,
    GET_ALL_HOTELS,
    GET_CITY_HOTELS,
    GET_PAGE_HOTELS,
    SET_SUCCESS,
    SET_LOADING
} from "../actionTypes";

const initialState = {
    success: null,
    pageHotels: [],
    cityHotels: [],
    hotel: { rooms: [] },
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
        case GET_HOTEL: {
            return {
                ...state,
                hotel: action.payload
            };
        }
        case GET_ALL_HOTELS: {
            return {
                ...state,
                pagination: {
                    page: action.payload.page,
                    count: action.payload.count,
                    total: action.payload.total,
                }
            };
        }
        case GET_PAGE_HOTELS: {
            return {
                ...state,
                pageHotels: action.payload.data,
                pagination: {
                    page: action.payload.page,
                    count: action.payload.count,
                    total: action.payload.total,
                }
            };
        }
        case GET_CITY_HOTELS: {
            return {
                ...state,
                cityHotels: action.payload.data,
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
