import React from "react";
import { formatPrice, formatDate } from "../../../constants/function"
import { CashOutline, PeopleCircleOutline, LogoPaypal, CheckmarkCircleOutline } from "react-ionicons"

function BookingCard({ bookings }) {
    return (
        <>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
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
                                    <div className="font-semibold text-left flex items-center">
                                        Price
                                        <CashOutline cssClasses="ml-2" />
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left flex items-center">
                                        Capacity
                                        <PeopleCircleOutline cssClasses="ml-2" />
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left flex items-center">
                                        Payment Status
                                        <LogoPaypal cssClasses="ml-2" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {bookings && bookings.map((booking) => {
                                return (
                                    <tr key={booking.id}>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="font-semibold text-gray-800">{booking.room.name}</div>
                                            </div>
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
                                            <div className="text-md text-green-700 font-medium text-left">{formatPrice(booking.room.price)} VND</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-left">{booking.room.capacity}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className={booking.paymentStatus === "APPROVED" ? "text-green-300 text-lg text-left font-bold" : "text-gray-900 text-lg text-left font-bold"}>
                                                {booking.paymentStatus}
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
