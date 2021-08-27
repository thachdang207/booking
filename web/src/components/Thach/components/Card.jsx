import React, { useState, useEffect } from "react";
import { formatPrice } from "../../../constants/function";
import EditRoom from "../../Admin/pages/EditRoom";
import {
    TrashOutline,
    CashOutline,
    PeopleCircleOutline,
    DocumentTextOutline,
    EllipsisHorizontalOutline
} from "react-ionicons";
import { Link } from "react-router-dom"
import AddRoom from "../../Admin/pages/AddRoom";

function Card(props) {
    const [rooms, setRooms] = useState(props.rooms)

    useEffect(() => {
        setRooms(props.rooms);
    }, [props.rooms])

    return (
        <>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left flex items-center">
                                        Price
                                        <CashOutline cssClasses="ml-2" />
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left flex items-center">Description
                                        <DocumentTextOutline cssClasses="ml-2" />
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left flex justify-center items-center">
                                        Capacity
                                        <PeopleCircleOutline cssClasses="ml-2" />
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Edit</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Delete</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">More details</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {rooms.map((room) => {
                                return (
                                    <tr key={room.id}>
                                        <td className="p-3 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="font-medium text-gray-800">
                                                    {room.name}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-700">
                                                {formatPrice(room.price)} VND{" "}
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-yellow-700">
                                                {room.description}
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-center">{room.capacity}</div>
                                        </td>
                                        <td className="text-center">
                                            <EditRoom id={room.id} room={room} />
                                        </td>
                                        <td>
                                            <TrashOutline cssClasses="cursor-pointer mx-auto" />
                                        </td>
                                        <td>
                                            <Link to={`/admin/room/${room.id}`}>
                                                <EllipsisHorizontalOutline cssClasses="cursor-pointer mx-auto" />
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="flex justify-center">
                        <AddRoom />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
