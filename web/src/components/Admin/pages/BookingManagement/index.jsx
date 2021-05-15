import React, {useEffect} from 'react';
import Title from "../../../Global/Title"
import {Table, Button} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {responseBookingRequests, getAdmin, getBookingRequests} from "../../../../redux/actions/admin.action"
import {formatDate} from "../../../../constants/function";

function BookingManagement(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const onAcceptRequest = (bookingId) => {
        const timer = setTimeout(() => {
            responseBookingRequests(dispatch, state.auth.token, bookingId, "ACCEPTED")
        }, 2000)
        return clearTimeout(timer);
    }

    const onDeclineRequest = (bookingId) => {
        const timer = setTimeout(() => {
            responseBookingRequests(dispatch, state.auth.token, bookingId, "EJECTED")
        }, 2000)
        return clearTimeout(timer);
    }
    useEffect(() => {
        getAdmin(dispatch, state.auth.token);
        getBookingRequests(dispatch, state.auth.token);
        document.title = `Booking Requests`
    }, []);

    return (
        <div>
            <div className="w-full rounded-sm">
                {state.admin && (
                    <Title title={`${state.admin.user.location.name}'s Booking Requests`} data-aos="fade-up"/>
                )}
                <div className="sm:mx-0 md:mx-6 lg:mx-8 xl:mx-10">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Room</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                            <th>Status</th>
                            <th>{}</th>
                            <th>{}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {state.admin.requests && state.admin.requests.map((booking, key) => {
                            return (
                                <tr key={key}>
                                    <td className="grid grid-cols-5">
                                        {key + 1}
                                    </td>
                                    <td>{booking.room.name}</td>
                                    <td>{formatDate(booking.startTime)}</td>
                                    <td>{formatDate(booking.endTime)}</td>
                                    <td>{booking.status}</td>
                                    <td>
                                        <Button onClick={onAcceptRequest}>
                                            Accept
                                        </Button>
                                    </td>
                                    <td>
                                        <Button onClick={onDeclineRequest}>
                                            Eject
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>

    );
}

export default BookingManagement;
