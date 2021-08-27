import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useSecureLs } from "../../Global/UseSecureLs"
import { getAdmin, getBookingInfo } from "../../../redux/actions/admin.action"
import { useParams } from 'react-router';
import UserBookingCard from "../components/UserBookingCard"
import TakeSkip from '../../Global/TakeSkip';
import { getSpecificRoom } from '../../../redux/actions/room.action';

function UserBooking(props) {
    const state = useSelector((state) => state);
    const [skip, setSkip] = useState(0);
    const [adminToken] = useSecureLs("admin_token")
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        getAdmin(dispatch, adminToken);
        getBookingInfo(dispatch, adminToken, id, skip);
        getSpecificRoom(dispatch, id);
    }, [skip]);

    const handlePageChange = (newSkip) => {
        setSkip(newSkip)
    }

    return (
        <div>
            <UserBookingCard
                skip={skip}
                bookings={state.admin && state.admin.room}
                room={state.room.room}
            />
            <TakeSkip skip={skip} total={state.admin.total} onPageChange={handlePageChange} />
        </div>
    );
}

export default UserBooking;