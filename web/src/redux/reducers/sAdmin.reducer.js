import {SADMIN_SIGN_IN, SADMIN_CHECK_AUTH, CREATE_LOCATION, SET_LOADING} from "../actionTypes";
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
    locations: [],
    loading: false,
    success: null,
    errors: null
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
                // is_admin: action.payload.success
                //     ? action.payload.is_admin
                //     : false,
                errors: action.payload.success ? null : action.payload.errors
            };
        }
        case SADMIN_CHECK_AUTH: {
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                token: action.payload.accessToken,
                user_id: action.payload.user.id,
                // is_admin: action.payload.is_admin,
            };
        }
        case CREATE_LOCATION: {
            return {
                ...state,
                success: action.payload.success,
                locations: action.payload.success ? action.payload.locations : null,
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
