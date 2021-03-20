import React, { useState } from 'react';
import JSONDATA from './data.json';
import { Link } from "react-router-dom";


function Searchbar() {
    const [initSearchData, setInitSearchData] = useState({
        check_in: "",
        check_out: "",
        city: "",
        guest: 1
    });

    return (
        <section className="relative">
            <div className="overlay w-full h-screen bg-gray-900 absolute z-0 opacity-50"></div>

            <img
                src="/assets/img/vietnam.jpeg"
                className="w-full h-screen object-cover"
                alt="hotel cover"
            />
            <div className="mt-8 book flex flex-col justify-center items-center text-gray-800 z-20 w-10/12">
                <h1 className="text-gray-200 mt-16 hidden sm:block text-xl md:text-4xl xl:text-5xl capitalize text-center font-serif">
                        Hãy tận hưởng những trải nghiệm tuyệt vời tại Việt Nam
                </h1>
                <div className="bg-indigo-400 bg-opacity-75 mt-5 p-5 rounded-sm mx-auto text-gray-700 w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-9/12 font-sans">
                    <div
                        className="flex flex-col xl:flex-row items-center"
                    >
                        <div className="flex flex-col md:mr-3 w-full md:w-3/4 ">
                            <label htmlFor='check-in' className="text-gray-900 text-xl">
                                Check-in
                            </label>
                            <input
                                id= 'check-in'
                                className="px-6 py-3 mt-2 w-full"
                                type="date"
                                value={initSearchData.check_in}
                                onChange={(e) =>
                                    setInitSearchData({
                                        ...initSearchData,
                                        check_in: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className="flex flex-col md:mr-3 w-full md:w-3/4 ">
                            <label htmlFor='check-out' className="text-gray-900 text-xl">
                                Check-out
                            </label>
                            <input
                                id='check-out'
                                className="px-6 py-3 mt-2 w-full"
                                type="date"
                                value={initSearchData.check_out}
                                onChange={(e) =>
                                    setInitSearchData({
                                        ...initSearchData,
                                        check_out: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className="flex flex-col md:mr-3 w-full md:w-3/4 ">
                            <span className="text-gray-900 text-xl">Điểm đến</span>
                            <select
                                aria-label='City'
                                className="px-6 py-3 mt-2"
                                value={initSearchData.city}
                                onChange={(e) =>
                                    setInitSearchData({
                                        ...initSearchData,
                                        city: e.target.value
                                    })
                                }
                            >
                                <option value="all">Điểm đến</option>
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
                            <span className="text-gray-900 text-xl">
                                Sô khách
                            </span>
                            <select
                                aria-label='Guest Count'
                                placeholder="Select one"
                                className="px-6 py-3 mt-2"
                                value={initSearchData.guest}
                                onChange={(e) =>
                                    setInitSearchData({
                                        ...initSearchData,
                                        guest: e.target.value
                                    })
                                }
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                </div>

                <hr className="hidden xl:block my-5 w-4/12 mx-auto border-indigo-800" />

                <Link
                    className="font-sans text-center bg-indigo-500 text-white text-lg hover:bg-indigo-800 uppercase rounded-sm  px-12 py-4 shadow
                    hover:shadow-lg block mx-auto mt-2 xl:mt-0"
                    to={`/search/check_in=${initSearchData.check_in}
                        &check_out=${initSearchData.check_out}
                        &city=${initSearchData.city}
                        &guest=${initSearchData.guest}`}
                >
                    Search
                </Link>
            </div>
        </section>
    );
}

export default Searchbar;
