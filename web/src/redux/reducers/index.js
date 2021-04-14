import { combineReducers } from "redux";
import auth from "./auth.reducer";
import hotel from "./hotel.reducer"
import user from "./user.reducer"


export default combineReducers({
    auth,
    hotel,
    user,
});
