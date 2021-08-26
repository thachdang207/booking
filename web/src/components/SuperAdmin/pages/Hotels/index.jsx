/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getAllLocations } from "../../../../redux/actions/sAdmin.action";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../../Global/Pagination";
import { Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useSecureLs } from "../../../Global/UseSecureLs";
import { Loading } from "../../../Global/Loading";

export default function Hotels() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { hotel } = useParams();
    const [superAdminToken] = useSecureLs("sAdmin_token");
    const [pagination, setPagination] = useState({
        page: 1,
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
        getAllLocations(dispatch, superAdminToken, JSON.stringify(hotel), pagination.page)
    }, [pagination, hotel]);


    return (
        <section className="px-4 md:px-10 lg:px-12">
            {state.sAdmin.loading && <Loading />}
            <div className="sm:mx-0 md:mx-2 lg:mx-3 xl:mx-4 p-5 bg-blue-50">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-sm font-semibold uppercase text-gray-700 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">ID</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Hotel</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Address</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Views</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Register for exsisted location</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y-4 divide-gray-100">
                            {state.sAdmin.locations && state.sAdmin.locations.map((hotel, key) => {
                                return (
                                    <tr key={key}>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-left">{key + 1}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-left font-semibold">{hotel.name}</div>
                                        </td>
                                        <td className="p-2 whitespace-wrap">
                                            <div className="text-lg text-left">{hotel.address}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-center">{hotel.count}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            <Link to={`/super-admin/register/${hotel.id}`}>
                                                {hotel.userId === null ? (
                                                    <Button color="primary">
                                                        Register
                                                    </Button>
                                                ) : (
                                                    <Button disabled>
                                                        Registered
                                                    </Button>
                                                )}
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </section>
    );
}
