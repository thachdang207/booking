import React, { useEffect } from 'react';
import Title from "../../Global/Title";
import { Table, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBookingHistories } from "../../../redux/actions/user.action";
import { formatDate } from "../../../constants/function";
import { useSecureLs } from "../../Global/UseSecureLs";
import { useLocation } from 'react-router-dom'
import capturePayment from '../../../redux/actions/booking.action';

function UserBooking() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const bookData = useSelector((state) => state.book.bookData)

    const query = new URLSearchParams(useLocation().search);
    const [user_token] = useSecureLs("token")
    const payerId = query.get("PayerID");
    const token = query.get("token");

    useEffect(() => {
        if (bookData) {
            if (payerId && token === bookData.orderId) {
                capturePayment(dispatch, bookData.roomId, bookData.id, user_token)
            }
        }
    }, []);
    
    useEffect(() => {
        getBookingHistories(dispatch, user_token);
    },[dispatch, user_token, state.book.paymentInfo])

    useEffect(() => {
        document.title = `Booking Histories`
    })

    return (
        <div className="absolute w-full h-full bg-gray-200 py-12">
            {state.user.user && (
                <Title title={`${state.user.user.fullName}'s Booking Histories`} data-aos="fade-up" />
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
                                        booking.paymentStatus === "CREATED"
                                            ? "dark"
                                            : "success"
                                    }>{booking.paymentStatus === "APPROVED" ? "Paid" : "Unpaid"}</Button></td>
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
