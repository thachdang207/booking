import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useSecureLs } from "../../Global/UseSecureLs"
import { getAdmin, getAllBookingInfo } from "../../../redux/actions/admin.action"
import BookingCard from "../components/BookingCard"
import TakeSkip from '../../Global/TakeSkip';

function Bookings(props) {
    const state = useSelector((state) => state);
    const [skip, setSkip] = useState(0);
    const [adminToken] = useSecureLs("admin_token")
    const dispatch = useDispatch()

    useEffect(() => {
        getAdmin(dispatch, adminToken);
        getAllBookingInfo(dispatch, adminToken, skip);
    }, [skip]);

    const handlePageChange = (newSkip) => {
        setSkip(newSkip)
    }

    return (
        <div>
            <BookingCard
                skip={skip}
                bookings={state.admin && state.admin.bookings}
            />
            <TakeSkip skip={skip} onPageChange={handlePageChange}/>
        </div>
    );
}

export default Bookings;