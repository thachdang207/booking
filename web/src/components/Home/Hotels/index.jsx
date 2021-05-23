/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import HotelCard from "./HotelCard";
import {getPageHotels} from "../../../redux/actions/hotel.action";
import {useSelector, useDispatch} from "react-redux";
import Pagination from "../../Global/Pagination";
import Title from "../../Global/Title"

function Hotels() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [pagination, setPagination] = useState({
        page: 2,
        count: 10,
        total: 606,
    });

    const handlePageChange = (newPage) => {
        setPagination({
            ...pagination,
            page: newPage
        });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            getPageHotels(dispatch, pagination.page)
        }, 500);

        return () => clearTimeout(timer);
    }, [pagination]);


    return (
        <section className="px-10 py-12 md:px-40 lg:px-56">
            <Title title="Featured Hotels"/>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                {state && state.hotel.pageHotels.map((hotel) => (
                    <HotelCard hotel={hotel} key={hotel.id}/>
                ))}
            </div>
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </section>
    );
}

export default Hotels;
