import React from "react";
import { formatPrice, formatDate, countDiffDate } from "../../../constants/function"
import { CheckmarkCircleOutline } from "react-ionicons"

function BookingCard({ bookings, skip }) {
    return (
        <>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">ID</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Room name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left flex items-center">
                                        Reserved At
                                        <CheckmarkCircleOutline cssClasses="ml-2" />
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Check in</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Check out</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Price
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">
                                        Payment Status
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {bookings && bookings.map((booking, key) => {
                                let diffDate = countDiffDate(booking.startTime, booking.endTime);
                                return (
                                    <tr key={booking.id}>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="font-semibold text-left text-gray-800">{skip + key + 1}</div>
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="font-semibold text-left text-gray-800">{booking.room.name}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium">{formatDate(booking.createdAt)}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left text-green-500 font-medium">{formatDate(booking.startTime)}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-md text-red-600 font-medium text-left">{formatDate(booking.endTime)}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-md text-green-600 font-medium text-left">{formatPrice(booking.room.price * diffDate)} VND</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className={booking.paymentStatus === "APPROVED" ? "text-green-600 text-lg text-center font-bold" : "text-gray-900 text-lg text-center font-bold"}>
                                                {booking.paymentStatus === "CREATED" ? "UNPAID" : "PAID"}
                                            </div>
                                        </td>
                                        
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

export default BookingCard;
