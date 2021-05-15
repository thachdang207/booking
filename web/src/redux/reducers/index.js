import { combineReducers } from "redux";
import admin from "./admin.reducer";
import auth from "./auth.reducer";
import hotel from "./hotel.reducer"
import user from "./user.reducer"
import room from "./room.reducer"
import sAdmin from "./sAdmin.reducer"
import city from './city.reducer'
import book from './booking.reducer'


export default combineReducers({
    auth,
    hotel,
    user,
    admin,
    room,
    sAdmin,
    city,
    book,
});
