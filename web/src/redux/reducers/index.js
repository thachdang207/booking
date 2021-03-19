import { combineReducers } from "redux";
import auth from "./auth.reducer";
import hotel from "./hotel.reducer"


export default combineReducers({
    auth,
    hotel,
});
