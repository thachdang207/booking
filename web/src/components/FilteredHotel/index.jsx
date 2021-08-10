/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import HotelCard from "../Home/Hotels/HotelCard";
import { getFilterHotels } from "../../redux/actions/hotel.action";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Global/Pagination";
import Title from "../Global/Title"
import { useParams } from "react-router-dom";
import StaticHeader from "../Global/StaticHeader";
import { Loading } from "../Global/Loading";
import SearchHotel from "../Global/SearchHotel";
import FilterSideBar from "./FilterSideBar";

function FilteredHotel() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { hotel } = useParams();
    const [pagination, setPagination] = useState({
        page: 1,
        count: 10,
        total: 100,
    });

    const handlePageChange = (newPage) => {
        setPagination({
            ...pagination,
            page: newPage
        });
    }

    useEffect(() => {
        getFilterHotels(dispatch, JSON.stringify(hotel), pagination.page);
    }, [])


    useEffect(() => {
        document.title = `Searching with "${hotel}"`
    })
    console.log(hotel);


    return (
        <>
            <StaticHeader />
            {state.hotel.loading && <Loading />}
            <section className="px-10 py-12 md:px-20 lg:px-32">
                <SearchHotel
                />
                <Title title={`${state.hotel.pagination.total} results by searching with "${hotel}"`} />
                <main className="min-h-screen flex flex-col md:flex-row md:justify-center p-0 text-gray-800">
                    <FilterSideBar />
                    <div className="w-full md:w-9/12 xl:w-10/12 md:ml-5 bg-gray-200 p-5 rounded-md">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                            {state && state.hotel.filterHotels.map((hotel) => (
                                <HotelCard hotel={hotel} key={hotel.id} />
                            ))}
                        </div>
                        <Pagination
                            pagination={pagination}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </main>
            </section>
        </>
    );
}

export default FilteredHotel;
