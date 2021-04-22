import { combineReducers } from "redux";
import auth from "./auth.reducer";
import hotel from "./hotel.reducer"
import user from "./user.reducer"
import room from "./room.reducer"
import sAdmin from "./sAdmin.reducer"
import city from './city.reducer'


export default combineReducers({
    auth,
    hotel,
    user,
    room,
    sAdmin,
    city,
});
