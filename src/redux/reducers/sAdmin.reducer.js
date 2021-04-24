import { SADMIN_SIGN_IN, SADMIN_CHECK_AUTH, SET_LOADING } from "../actionTypes";
import SecureLS from "secure-ls";

let ls = new SecureLS({ encodingType: "aes", isCompression: false });
let _token;
let _user_id;
try {
    _token = ls.get("token");
    _user_id = ls.get("user_id");
} catch (error) {}
const initialState = {
    isAuthenticated:
        _token !== null && _token !== "null" && _token !== "" ? true : false,
    token: _token || null,
    user_id: _user_id || null,
    loading: false,
    success: null,
    errors: null
};

export default function sAdmin(state = initialState, action) {
    switch (action.type) {
        case SADMIN_SIGN_IN: {
            return {
                ...state,
                success: action.payload.success ? true : false,
                isAuthenticated: action.payload.success ? true : false,
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
