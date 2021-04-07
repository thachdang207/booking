import React, { useEffect } from "react";
import HotelCard from "./HotelCard";
import { getHotels } from "../../../redux/actions/hotel.action";
import { useSelector, useDispatch } from "react-redux";

function Hotels() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    useEffect(() => getHotels(dispatch), []); // eslint-disable-line

    return (
        <section className="px-12 py-10 xl:px-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {state && state.hotel.hotels.map((hotel) => (
                    !hotel.isFeatured ? (
                        <HotelCard hotel={hotel} key={hotel.id} />
                    ) : ""
                ))}
            </div>
        </section>
    );
}

export default Hotels;
