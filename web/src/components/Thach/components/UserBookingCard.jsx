import React from "react";
import { formatDate } from "../../../constants/function"
import BookingDetail from "./BookingDetail"

function UserBookingInfo({ bookings, skip, room }) {
    return (
        <>
            <div className="p-3">
                <div className="text-xl text-center p-3">
                    <div className="font-semibold uppercase text-gray-700">{room ? room.name : "undefined"}</div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">ID</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Avatar</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Full name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Address</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">City</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Phone number</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Reserved at
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">
                                        Payment Status
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">
                                        More details
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {bookings && bookings.map((booking, key) => {
                                return (
                                    <tr key={key}>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="font-semibold text-left text-gray-800">{skip + key + 1}</div>
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            <img src={
                                                booking.user.avatar
                                                    ? booking.user.avatar
                                                    : "https://source.unsplash.com/random"
                                            }
                                                alt="avatar"
                                                className="w-6 h-6 object-cover rounded-full" />
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="font-semibold text-left text-gray-800">{booking.user.fullName}</div>
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="font-semibold text-left text-gray-800">{booking.user.address}</div>
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="font-semibold text-left text-gray-800">{booking.user.city}</div>
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="font-semibold text-left text-gray-800">{booking.user.email}</div>
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="font-semibold text-left text-gray-800">{booking.user.phoneNumber}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium">{formatDate(booking.createdAt)}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className={booking.paymentStatus === "APPROVED" ? "text-green-600 text-lg text-center font-bold" : "text-gray-900 text-lg text-center font-bold"}>
                                                {booking.paymentStatus === "CREATED" ? "UNPAID" : "PAID"}
                                            </div>
                                        </td>
                                        <td><BookingDetail booking={booking} room={room} /></td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default UserBookingInfo;
