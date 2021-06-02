import React, {useEffect} from 'react';
import Title from "../../../Global/Title"
import {Table, Button} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {formatDate} from "../../../../constants/function";
import {useSecureLs} from "../../../Global/UseSecureLs";
import {Loading} from "../../../Global/Loading";
import ResponseBookingButton from "../../components/ResponseBookingButton";
import {getAdmin, getBookingRequests} from "../../../../redux/actions/admin.action";

function BookingManagement() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [adminToken] = useSecureLs("admin_token")

    useEffect(() => {
        getAdmin(dispatch, adminToken);
        getBookingRequests(dispatch, adminToken);
    }, [adminToken]);

    useEffect(() => {
        document.title = `Booking Requests`
    })

    return (
        <div>
            <div className="w-full rounded-sm">
                {state.admin && (
                    <Title title={`${state.admin.user.location.name}'s Booking Requests`} data-aos="fade-up"/>
                )}
                {state.admin.loading && <Loading/>}
                <div className="sm:mx-0 md:mx-6 lg:mx-8 xl:mx-10">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Room</th>
                            <th>Send at</th>
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
                                    <td>{formatDate(booking.createdAt)}</td>
                                    <td>{formatDate(booking.startTime)}</td>
                                    <td>{formatDate(booking.endTime)}</td>
                                    <td>{booking.status}</td>
                                    {booking.status === "PENDING" ? (
                                        <>
                                            <td>
                                                <ResponseBookingButton color="success" dispatch={dispatch}
                                                                       token={adminToken} bookingId={booking.id}
                                                                       decide="ACCEPTED"/>
                                            </td>
                                            <td>
                                                <ResponseBookingButton color="danger" dispatch={dispatch}
                                                                       token={adminToken} bookingId={booking.id}
                                                                       decide="REJECTED"/>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>
                                                <Button disabled
                                                        color={
                                                            booking.status === "ACCEPTED"
                                                                ? "success"
                                                                : "danger"
                                                        }
                                                >
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
