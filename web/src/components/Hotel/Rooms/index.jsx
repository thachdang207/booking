import React, { useEffect } from 'react';
import { Table } from "reactstrap";
import { formatPrice } from "../../../constants/function";
import BookingModal from "../BookingModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHotel } from "../../../redux/actions/hotel.action";

function Rooms({ rooms, hotel, fromTo}) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let { id } = useParams();

    useEffect(() => {
        getHotel(dispatch, id)
    }, []); // eslint-disable-line
    return (
        <div className="md:mx-12 lg:mx-40 xl:mx-60">
            <Table striped bordered responsive hover>
                <thead>
                    <tr className="text-xl bg-blue-900 text-white">
                        <th>Services</th>
                        <th>Name</th>
                        <th>Maximum guests</th>
                        <th>Price</th>
                        <th>Book</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => {
                        return (
                            <tr key={room.id}>
                                <td className="grid grid-cols-5">
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
                                <td className="font-bold text-blue-700">{room.name}</td>
                                <td>{room.capacity}</td>
                                <td className="font-medium text-yellow-700">{formatPrice(room.price)} {" "} VND</td>
                                <td>
                                    <BookingModal room={room} hotel={hotel} fromTo={fromTo}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Rooms;
