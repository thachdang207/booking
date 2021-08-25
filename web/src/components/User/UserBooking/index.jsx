import React, { useEffect } from 'react';
import Title from "../../Global/Title";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBookingHistories } from "../../../redux/actions/user.action";
import { formatDate } from "../../../constants/function";
import { useSecureLs } from "../../Global/UseSecureLs";
import { useLocation } from 'react-router-dom'
import capturePayment from '../../../redux/actions/booking.action';
import { CheckmarkCircleOutline } from "react-ionicons"

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
    }, [dispatch, user_token, state.book.paymentInfo])

    useEffect(() => {
        document.title = `Booking Histories`
    })

    return (
        <>
            {state.user.user && (
                <Title title={`${state.user.user.fullName}'s Booking Histories`} data-aos="fade-up" />
            )}
            <div className="sm:mx-0 md:mx-10 lg:mx-20 xl:mx-40 p-4 bg-indigo-50">
                <div className="overflow-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-700 bg-gray-50">
                            <tr>
                            <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">ID</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left flex items-center">
                                        Reserved At
                                        <CheckmarkCircleOutline cssClasses="ml-2" />
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Hotel</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Room</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Check in</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Check out</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Payment status</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-md divide-y divide-gray-100">
                            {state.user.bookings && state.user.bookings.map((booking, key) => {
                                return (
                                    <tr key={key}>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="font-medium text-gray-800">
                                                    {key + 1}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium">{formatDate(booking.createdAt)}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-semibold">{booking.location.name}</div>
                                        </td>
                                        <td>{booking.room.name}</td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left text-green-600 font-medium">{formatDate(booking.startTime)}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-md text-red-600 font-medium text-left">{formatDate(booking.endTime)}</div>
                                        </td>
                                        <td><Button disabled color={
                                            booking.paymentStatus === "CREATED"
                                                ? "danger"
                                                : "success"
                                        }>{booking.paymentStatus === "APPROVED" ? "Paid" : "Unpaid"}</Button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default UserBooking;
