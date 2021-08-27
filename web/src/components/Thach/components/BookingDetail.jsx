import React, { useState, useRef, useEffect } from 'react';
import { EllipsisHorizontalOutline } from 'react-ionicons';
import { formatDate, countDiffDate, formatPrice } from '../../../constants/function.js';
import Transition from '../utils/Transition.js';

function BookingDetail({ booking, room }) {

    const [detailOpen, setDetailOpen] = useState(false);

    const trigger = useRef(null);
    const detailContent = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!detailOpen || detailContent.current.contains(target) || trigger.current.contains(target)) return;
            setDetailOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!detailOpen || keyCode !== 27) return;
            setDetailOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    let diffDate = countDiffDate(booking.startTime, booking.endTime);


    return (
        <div>
            {/* Button */}
            <button
                ref={trigger}
                className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full mx-auto ${detailOpen && 'bg-gray-200'}`}
                onClick={() => setDetailOpen(!detailOpen)}
                aria-controls="search-modal"
            >
                <span className="sr-only">Search</span>
                <EllipsisHorizontalOutline cssClasses="cursor-pointer" />
            </button>
            {/* Modal backdrop */}
            <Transition
                className="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
                show={detailOpen}
                enter="transition ease-out duration-200"
                enterStart="opacity-0"
                enterEnd="opacity-100"
                leave="transition ease-out duration-100"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
                aria-hidden="true"
            />
            {/* Modal dialog */}
            <Transition
                id="search-modal"
                className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
                role="dialog"
                aria-modal="true"
                show={detailOpen}
                enter="transition ease-in-out duration-200"
                enterStart="opacity-0 translate-y-4"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-200"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 translate-y-4"
            >
                <div className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg" ref={detailContent}>
                    <div className="border-b border-gray-200">
                        <div className="relative h-56 p-12 text-sm font-semibold uppercase text-gray-700">
                            <div className="p-2 whitespace-nowrap">
                                <div className="font-semibold flex justify-between">
                                    Full name:
                                    <span className="font-bold">
                                        {booking.user.fullName}
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 whitespace-nowrap">
                                <div className="font-semibold flex justify-between">
                                    Address:
                                    <span className="font-bold">
                                        {booking.user.address}
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 whitespace-nowrap">
                                <div className="font-semibold flex justify-between">
                                    City:
                                    <span className="font-bold">
                                        {booking.user.city}
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 whitespace-nowrap">
                                <div className="font-semibold flex justify-between">
                                    Email:
                                    <span className="font-bold">
                                        {booking.user.email}
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 whitespace-nowrap">
                                <div className="font-semibold flex justify-between">
                                    Phone number:
                                    <span className="font-bold">
                                        {booking.user.phoneNumber}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-56 px-12 pb-12 pt-3 text-sm border-t border-gray-200 font-semibold uppercase text-gray-700">
                            <div className="p-2 whitespace-nowrap">
                                <div className="font-semibold flex justify-between">
                                    Reserved at:
                                    <span className="font-bold">
                                        {formatDate(booking.createdAt)}
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 whitespace-nowrap">
                                <div className="font-semibold flex justify-between">
                                    Check in:
                                    <span className="font-bold text-green-500">
                                        {formatDate(booking.startTime)}
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 whitespace-nowrap">
                                <div className="font-semibold flex justify-between">
                                    Check out:
                                    <span className="font-bold text-red-500">
                                        {formatDate(booking.endTime)}
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 whitespace-nowrap">
                                <div className="font-semibold flex justify-between">
                                    Total price:
                                    <span className="font-bold text-green-600">
                                        {formatPrice(room.price * diffDate)} {" "} VND
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 whitespace-nowrap">
                                <div className="font-semibold flex justify-between">
                                    Payment status:
                                    <span className={`font-bold ${booking.paymentStatus === "CREATED" ? "text-gray-700" : "text-green-500"}`}>
                                        {booking.paymentStatus === "CREATED" ? "UNPAID" : "PAID"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default BookingDetail;