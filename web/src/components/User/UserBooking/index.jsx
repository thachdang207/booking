import React, {useEffect} from 'react';
import Title from "../../Global/Title";
import {Table, Button} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {getBookingHistories} from "../../../redux/actions/user.action";
import {formatDate} from "../../../constants/function";
import {useSecureLs} from "../../Global/UseSecureLs";

function UserBooking() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [token] = useSecureLs("token")
    useEffect(() => {
        getBookingHistories(dispatch, token);
    }, []);

    useEffect(() => {
        document.title = `Booking Histories`
    })

    return (
        <div className="absolute w-full h-full bg-gray-200">
            {state.user.user && (
                <Title title={`${state.user.user.fullName}'s Booking Histories`} data-aos="fade-up"/>
            )}
            <div className="sm:mx-0 md:mx-10 lg:mx-20 xl:mx-40">
                <Table striped bordered responsive hover>
                    <thead>
                    <tr className="text-center bg-blue-900 text-white">
                        <th>ID</th>
                        <th>Created Day</th>
                        <th>Hotel</th>
                        <th>Room</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Payment Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {state.user.bookings && state.user.bookings.map((booking, key) => {
                        return (
                            <tr key={key} className="font-semibold">
                                <td className="grid grid-cols-5">
                                    {key + 1}
                                </td>
                                <td>{formatDate(booking.createdAt)}</td>
                                <td className="font-bold">{booking.location.name}</td>
                                <td>{booking.room.name}</td>
                                <td className="text-green-600">{formatDate(booking.startTime)}</td>
                                <td className="text-red-600">{formatDate(booking.endTime)}</td>
                                <td><Button disabled color={
                                    booking.status === "PENDING"
                                        ? "dark"
                                        : (booking.status === "ACCEPTED"
                                                ? "success"
                                                : "danger")
                                }>{booking.status} </Button></td>
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
