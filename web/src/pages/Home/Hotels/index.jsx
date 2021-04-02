import React, { useEffect } from "react";
import HotelCard from "./HotelCard";
import { getFeaturedHotels } from "../../../redux/actions/hotel.action";
import { useSelector, useDispatch } from "react-redux";

function Hotels() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    useEffect(() => getFeaturedHotels(dispatch), []); // eslint-disable-line

    return (
        <section className="px-24 py-10 xl:px-36">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {state && state.hotel.featuredHotels.map((hotel) => (
                        <HotelCard hotel={hotel} key={hotel.id} />
                    ))}
            </div>
        </section>
    );
}

export default Hotels;
