import React, {useEffect} from 'react';
import Title from "../../../Global/Title"
import {Table, Button} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {responseBookingRequests, getAdmin, getBookingRequests} from "../../../../redux/actions/admin.action"
import {formatDate} from "../../../../constants/function";
import {useSecureLs} from "../../../Global/UseSecureLs";
import {Loading} from "../../../Global/Loading";

function BookingManagement() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [adminToken] = useSecureLs("admin_token")
    const onAcceptRequest = (bookingId) => {
        const timer = setTimeout(() => {
            responseBookingRequests(dispatch, adminToken, bookingId, "ACCEPTED")
        }, 2000)
        return () => clearTimeout(timer);
    }

    const onDeclineRequest = (bookingId) => {
        const timer = setTimeout(() => {
            responseBookingRequests(dispatch, adminToken, bookingId, "REJECTED")
        }, 2000)
        return () => clearTimeout(timer);
    }

    useEffect(() => {
        getAdmin(dispatch, adminToken);
        getBookingRequests(dispatch, adminToken);
        document.title = `Booking Requests`
    }, [adminToken]);

    return (
        <div>
            <div className="w-full rounded-sm">
                {state.admin && (
                    <Title title={`${state.admin.user.location.name}'s Booking Requests`} data-aos="fade-up"/>
                )}
                {state.admin.loading && <Loading />}
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
                                    <td className="font-bold">{booking.room.name}</td>
                                    <td>{formatDate(booking.startTime)}</td>
                                    <td>{formatDate(booking.endTime)}</td>
                                    <td>{booking.status}</td>
                                    {booking.status === "PENDING" ? (
                                        <>
                                            <td>
                                                <Button color="primary" onClick={onAcceptRequest}>
                                                    Accept
                                                </Button>
                                            </td>
                                            <td>
                                                <Button color="danger" onClick={onDeclineRequest}>
                                                    Reject
                                                </Button>
                                            </td>
                                        </>
                                        ) : (
                                            <>
                                                <td>
                                                    <Button disabled>
                                                        {booking.status}
                                                    </Button>
                                                </td>
                                                <td>

                                                </td>
                                            </>
                                        )}
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
