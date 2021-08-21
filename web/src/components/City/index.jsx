/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import HotelCard from "../Home/Hotels/HotelCard";
import { getCityHotels } from "../../redux/actions/hotel.action";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Global/Pagination";
import Title from "../Global/Title"
import Border from "../Global/Border"
import { useParams } from "react-router-dom";
import StaticHeader from "../Global/StaticHeader";
import Footer from "../Global/Footer"
import Cities from "../Home/Cities"
import { getCities } from "../../redux/actions/city.action";
import { Loading } from "../Global/Loading";
import { findLabel } from "../../constants/function";
import { CITY_OPTIONS } from "../../constants/global";

function City() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { id } = useParams();
    const [pagination, setPagination] = useState({
        page: 1,
        count: 10,
        total: 400,
    });

    const handlePageChange = (newPage) => {
        setPagination({
            ...pagination,
            page: newPage
        });
    }

    const cityName = findLabel(CITY_OPTIONS, id)

    useEffect(() => {
        getCities(dispatch);
    }, [])

    useEffect(() => {
        document.title = `${cityName}`
    })
    useEffect(() => {
        const timer = setTimeout(() => {
            getCityHotels(dispatch, id, pagination.page)
            window.scrollTo(0, 0);
        }, 1000);

        return () => clearTimeout(timer);
    }, [pagination]);


    return (
        <>
            <StaticHeader />
            <Border/>
            <Cities/>
            <Border/>
            {state.hotel.loading && <Loading />}
            <section className="px-10 py-12 lg:px-28 xl:px-40 2xl:px-56">
                <Title title={`${cityName}'s Hotels`} />
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {state && state.hotel.cityHotels.map((hotel) => (
                        <HotelCard hotel={hotel} key={hotel.id} />
                    ))}
                </div>
                <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </section>
            <Footer/>
        </>
    );
}

export default City;
