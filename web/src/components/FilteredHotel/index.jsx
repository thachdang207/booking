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
import Footer from "../Global/Footer";
import { Radio, Space } from 'antd';
import { scoreFilterOptions } from './FilterOptions';
import { CITY_OPTIONS } from "../../constants/global";
import { findValue } from "../../constants/function";

function FilteredHotel() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { hotel } = useParams();
    const initialPagination = {
        page: 1,
        count: 10,
        total: 500,
    }
    const [pagination, setPagination] = useState(initialPagination);

    const handlePageChange = (newPage) => {
        setPagination({
            ...pagination,
            page: newPage
        });
    }

    const initialFilterValues = {
        score: {
            from: 0,
            to: 5,
        },
        locationType: "Hotel",
        cityId: findValue(CITY_OPTIONS, "Đà Nẵng"),
        isFeatured: false,
        // nearBeach: false,
    }

    const [filter, setFilter] = useState(initialFilterValues);

    useEffect(() => {
        getFilterHotels(dispatch, JSON.stringify(hotel), filter, pagination.page);
    }, [hotel, pagination, filter])
    console.log(filter);

    useEffect(() => {
        setPagination(initialPagination)
    }, [hotel])


    useEffect(() => {
        document.title = `Searching with "${hotel}"`
    })


    return (
        <>
            <StaticHeader />
            {state.hotel.loading && <Loading />}
            <section className="px-6 py-12 md:px-12 lg:px-16 xl:px-20">
                <SearchHotel
                />
                <Title
                    title={`${state.hotel.pagination.total >= 1 ? 1 : 0} - ${state.hotel.pagination.total >= 10 ? 10 : state.hotel.pagination.total}  of ${state.hotel.pagination.total} ${state.hotel.pagination.total === 1 ? "result" : "results"} in total`}
                />
                <main className="min-h-screen flex flex-col lg:flex-row md:justify-center p-0 text-gray-800">
                    <div className="block md:1/12 xl:w-3/12 w-full bg-gray-100 p-6 rounded-md">
                        <h4 className="p-2">Filter by:</h4>
                        <div className="p-4 bg-gray-200 rounded-xl">
                            <div className="border-t border-gray-300 mt-3 px-3">
                                <h5 className="p-2">Score: </h5>
                                <Radio.Group
                                    onChange={(e) => {
                                        setFilter({
                                            ...filter,
                                            score: e.target.value
                                        })
                                    }}
                                    value={filter.score}
                                    buttonStyle="solid"
                                    size="large"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Space direction="vertical">
                                        {scoreFilterOptions.map((score, key) =>
                                            <Radio key={key} value={score.value} className="my-2 w-full text-center">{score.label}</Radio>
                                        )}
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="border-t border-gray-300 mt-3 px-3">
                                <h5 className="font-semibold py-2">Location type:</h5>
                                <Radio.Group
                                    onChange={(e) => {
                                        setFilter({
                                            ...filter,
                                            locationType: e.target.value
                                        })
                                    }}
                                    value={filter.locationType}
                                    buttonStyle="solid"
                                >
                                    <Space direction="horizontal">
                                        <Radio.Button value="Homestay" className="my-2 w-full text-center">Homestay</Radio.Button>
                                        <Radio.Button value="Hotel" className="my-2 w-full text-center">Hotel</Radio.Button>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <div className="border-t border-gray-300 mt-3 px-3">
                                <h5 className="font-semibold py-2">Featured</h5>
                                <Radio.Group
                                    onChange={() => {
                                        setFilter({
                                            ...filter,
                                            isFeatured: !filter.isFeatured,
                                        })
                                    }}
                                    value={filter.isFeatured}
                                    size="large"
                                >
                                    <Radio value={true} className="my-2 w-full text-center">Yes</Radio>
                                    <Radio value={false} className="my-2 w-full text-center">No</Radio>
                                </Radio.Group>
                            </div>
                            <div className="border-t border-gray-300 mt-3 px-3">
                                <h5 className="font-semibold py-2">City</h5>
                                <Radio.Group
                                    onChange={(e) => {
                                        setFilter({
                                            ...filter,
                                            cityId: e.target.value,
                                        })
                                    }}
                                    value={filter.cityId}
                                    size="large"
                                >
                                    {CITY_OPTIONS.map((city, key) => (
                                        <Radio key={key} value={city.value} className="my-2 w-full text-center">{city.label}</Radio>
                                    ))}
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:11/12 xl:w-9/12 xl:ml-5 bg-gray-200 p-5 rounded-md">
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
            <Footer/>
        </>
    );
}

export default FilteredHotel;
