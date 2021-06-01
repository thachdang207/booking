/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import HotelCard from "../Home/Hotels/HotelCard";
import {getCityHotels} from "../../redux/actions/hotel.action";
import {useSelector, useDispatch} from "react-redux";
import Pagination from "../Global/Pagination";
import Title from "../Global/Title"
import {useParams} from "react-router-dom";
import StaticHeader from "../Global/StaticHeader";
import {getCities} from "../../redux/actions/city.action";
import {setLoading} from "../../redux/actions/commonActions";
import {Loading} from "../Global/Loading";

function City() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const {id} = useParams();
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

    useEffect(() => {
        getCities(dispatch);
        document.title = ``
    }, [])
    useEffect(() => {
        const timer = setTimeout(() => {
            getCityHotels(dispatch, id, pagination.page)
        }, 1000);

        return () => clearTimeout(timer);
    }, [pagination]);


    return (
        <>
            <StaticHeader/>
            {state.hotel.loading && <Loading />}
            <section className="px-10 py-12 md:px-40 lg:px-56">
                <Title title={`Hotels`}/>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {state && state.hotel.cityHotels.map((hotel) => (
                        <HotelCard hotel={hotel} key={hotel.id}/>
                    ))}
                </div>
                <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </section>
        </>
    );
}

export default City;
