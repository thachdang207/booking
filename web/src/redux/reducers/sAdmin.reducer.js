import {SADMIN_SIGN_IN, SADMIN_CHECK_AUTH, SET_LOADING, CREATE_OWNER, GET_ALL_LOCATIONS} from "../actionTypes";
import SecureLS from "secure-ls";

let ls = new SecureLS({ encodingType: "aes", isCompression: false });
let _sAdmin_token;
let _sAdmin_id;
try {
    _sAdmin_token = ls.get("sAdmin_token");
    _sAdmin_id = ls.get("sAdmin_id");
} catch (error) {}
const initialState = {
    isAuthenticated:
        _sAdmin_token !== null && _sAdmin_token !== "null" &&_sAdmin_token !== "",
    token: _sAdmin_token || null,
    user_id: _sAdmin_id || null,
    locations: null,
    loading: false,
    success: null,
    errors: null,
    pagination: {
        page: null,
        count: null,
        total: null,
    }
};

export default function sAdmin(state = initialState, action) {
    switch (action.type) {
        case SADMIN_SIGN_IN: {
            return {
                ...state,
                success: !!action.payload.success,
                isAuthenticated: !!action.payload.success,
                token: action.payload.success ? action.payload.accessToken : null,
                user_id: action.payload.success ? action.payload.user.id : null,
                errors: action.payload.success ? null : action.payload.errors
            };
        }
        case SADMIN_CHECK_AUTH: {
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                token: action.payload.accessToken,
                user_id: action.payload.user.id,
            };
        }
        case GET_ALL_LOCATIONS: {
            return {
                ...state,
                locations: action.payload.data,
                pagination: {
                    page: action.payload.page,
                    count: action.payload.count,
                    total: action.payload.total,
                }
            }
        }
        case CREATE_OWNER: {
            return {
                ...state,
                success: action.payload.success,
                errors: action.payload.success ? null : action.payload.errors
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
