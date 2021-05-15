import {
    GET_ROOM,
    GET_SPECIFIC_ROOM,
    GET_AVAILABLE_ROOM,
    GET_ALL_ROOMS,
    SET_SUCCESS,
    SET_LOADING
} from "../actionTypes";

const initialState = {
    room: {
        id: null,
        name: "",
        description: "",
        price: "",
        capacity: "",
        locationId: "",
        created_at: "",
        updated_at: ""
    },
    allRooms: [],
    availableRooms: [],
    success: null,
    errors: null,
    loading: false,
    pagination: {
        page: null,
        count: null,
        total: null,
    }
};

export default function room(state = initialState, action) {
    switch (action.type) {
        case GET_ROOM: {
            return {
                ...state,
            };
        }
        case GET_SPECIFIC_ROOM: {
            return {
                ...state,
                room: action.payload,
            };
        }
        case GET_AVAILABLE_ROOM: {
            return {
                ...state,
                availableRooms: action.payload,
            };
        }
        case GET_ALL_ROOMS: {
            return {
                ...state,
                allRooms: action.payload.data,
                pagination: {
                    page: action.payload.page,
                    count: action.payload.count,
                    total: action.payload.total,
                }
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
