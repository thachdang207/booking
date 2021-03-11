import React, { useState } from 'react';
import JSONDATA from './data.json';
import { Link } from "react-router-dom";


function Searchbar() {
    const [initSearchData, setinitSearchData] = useState({
        check_in: "",
        check_out: "",
        city: "",
        guest: 1
    });

    return (
        <section className="relative">
            <div className="overlay w-full h-screen bg-gray-900 absolute z-10 opacity-75"></div>

            <img
                src="/assets/img/vietnam.jpeg"
                className="w-full h-screen object-cover"
                alt="hotel cover"
            />
            <div className="mt-8 book flex flex-col justify-center items-center text-gray-800 z-20 w-10/12">
                <h1 className="text-gray-200 mt-16 hidden sm:block text-xl md:text-4xl xl:text-5xl capitalize text-center font-serif">
                        Enjoy amazing experience in Vietnam
                </h1>
                <div className="bg-blue-500 bg-opacity-75 mt-5 p-5 rounded-sm mx-auto text-gray-700 w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-9/12 font-sans">
                    <div
                        className="flex flex-col xl:flex-row items-center"
                    >
                        <div className="flex flex-col md:mr-3 w-full md:w-3/4 ">
                            <label htmlFor='check-in' className="text-gray-700 text-xl">
                                Check In
                            </label>
                            <input
                                id= 'check-in'
                                className="px-6 py-3 mt-2 w-full"
                                type="date"
                                value={initSearchData.check_in}
                                onChange={(e) =>
                                    setinitSearchData({
                                        ...initSearchData,
                                        check_in: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className="flex flex-col md:mr-3 w-full md:w-3/4 ">
                            <label htmlFor='check-out' className="text-gray-700 text-xl">
                                Check Out
                            </label>
                            <input
                                id='check-out'
                                className="px-6 py-3 mt-2 w-full"
                                type="date"
                                value={initSearchData.check_out}
                                onChange={(e) =>
                                    setinitSearchData({
                                        ...initSearchData,
                                        check_out: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className="flex flex-col md:mr-3 w-full md:w-3/4 ">
                            <span className="text-gray-700 text-xl">City</span>
                            <select
                                aria-label='City'
                                className="px-6 py-3 mt-2"
                                value={initSearchData.city}
                                onChange={(e) =>
                                    setinitSearchData({
                                        ...initSearchData,
                                        city: e.target.value
                                    })
                                }
                            >
                                <option value="all">All Cities</option>
                                {
                                    JSONDATA.map((val, key) => {
                                        return (
                                            <option value={val.city} key={key}>
                                                {val.city}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="flex flex-col md:mr-3 w-full md:w-3/4 ">
                            <span className="text-gray-700 text-xl">
                                Guests
                            </span>
                            <select
                                aria-label='Guest Count'
                                placeholder="Select one"
                                className="px-6 py-3 mt-2"
                                value={initSearchData.guest}
                                onChange={(e) =>
                                    setinitSearchData({
                                        ...initSearchData,
                                        guest: e.target.value
                                    })
                                }
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                                <option value="3">6</option>
                                <option value="1">7</option>
                                <option value="2">8</option>
                                <option value="3">9</option>
                                <option value="1">10</option>
                            </select>
                        </div>
                    </div>
                </div>

                <hr className="hidden xl:block my-5 w-4/12 mx-auto border-blue-800" />

                <Link
                    className="font-sans text-center bg-blue-600 text-white hover:bg-blue-700 uppercase rounded-sm  px-12 py-4 shadow
                    hover:shadow-lg block mx-auto mt-2 xl:mt-0"
                    to={`/search/check_in=${initSearchData.check_in}&check_out=${initSearchData.check_out}&city=${initSearchData.city}&guest=${initSearchData.guest}`}
                >
                    Search
                </Link>
            </div>
        </section>
    );
}

export default Searchbar;
