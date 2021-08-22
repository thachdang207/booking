import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useSecureLs } from "../../Global/UseSecureLs"
import { getAdmin, getBookingRequests } from "../../../redux/actions/admin.action"
import BookingCard from "../components/BookingCard"

function Bookings(props) {
    const state = useSelector((state) => state);
    const [adminToken] = useSecureLs("admin_token")
    const dispatch = useDispatch()
    useEffect(() => {
        getAdmin(dispatch, adminToken);
        getBookingRequests(dispatch, adminToken);
    }, []);
    return (
        <div>
                <BookingCard bookings={state.admin && state.admin.requests}/>
        </div>
    );
}

export default Bookings;