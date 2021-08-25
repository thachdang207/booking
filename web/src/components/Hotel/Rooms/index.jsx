import React, { useEffect } from 'react';
import { formatPrice } from "../../../constants/function";
import BookingModal from "../BookingModal";
import {
    CashOutline,
    PeopleCircleOutline,
} from "react-ionicons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHotel } from "../../../redux/actions/hotel.action";

function Rooms({ rooms, hotel, fromTo }) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let { id } = useParams();

    useEffect(() => {
        getHotel(dispatch, id)
    }, []); // eslint-disable-line
    return (
        <div className="md:mx-12 lg:mx-40 xl:mx-60 p-3 bg-indigo-100 shadow-lg">
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-700 bg-gray-50">
                        <tr>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Services</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Name</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left flex justify-start items-center">
                                        Capacity
                                        <PeopleCircleOutline cssClasses="ml-2" />
                                    </div>
                                </th>
                            <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left flex items-center justify-start">
                                        Price
                                        <CashOutline cssClasses="ml-2" />
                                    </div>
                                </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Reserve</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                        {rooms.map((room) => {
                            return (
                                <tr key={room.id}>
                                    <td className="grid grid-cols-5 p-3">
                                        {state.hotel.hotel.serviceTypes.map((service, key) => {
                                            return (
                                                <div key={key}>
                                                    <img
                                                        src={service.icon}
                                                        alt="service"
                                                        className="relative w-6 h-6 object-contain"
                                                    />
                                                </div>
                                            )
                                        })}
                                    </td>
                                    <td className="p-3 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="font-medium text-gray-800">
                                                {room.name}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-left text-yellow-700">{room.capacity}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-600">
                                            {formatPrice(room.price)} VND{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <BookingModal room={room} hotel={hotel} fromTo={fromTo} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Rooms;
