import React, {useEffect} from 'react';
import Title from "../../Global/Title";
import {Table, Button} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {getBookingHistories} from "../../../redux/actions/user.action";
import {formatDate} from "../../../constants/function";

function UserBooking(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    useEffect(() => {
        getBookingHistories(dispatch, state.auth.token);
        document.title = `Booking Histories`
    }, []);

    return (
        <div className="w-full md:w-9/12 xl:w-10/12 bg-gray-200 rounded-sm">
            {state.user.user && (
                <Title title={`${state.user.user.fullName}'s Booking Histories`} data-aos="fade-up"/>
            )}
            <div className="sm:mx-0 md:mx-10 lg:mx-20 xl:mx-40">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Hotel</th>
                        <th>Room</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Status</th>
                        <th>{}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {state.user.bookings && state.user.bookings.map((booking, key) => {
                        return (
                            <tr key={key}>
                                <td className="grid grid-cols-5">
                                    {key + 1}
                                </td>
                                <td>{booking.location.name}</td>
                                <td>{booking.room.name}</td>
                                <td>{formatDate(booking.startTime)}</td>
                                <td>{formatDate(booking.endTime)}</td>
                                <td>{booking.status}</td>
                                <td>
                                    <Button>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default UserBooking;
