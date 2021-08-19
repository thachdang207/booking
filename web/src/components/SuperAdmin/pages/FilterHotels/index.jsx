/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getFilterHotels } from "../../../../redux/actions/hotel.action";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../../Global/Pagination";
import Title from "../../../Global/Title"
import { Table, Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import SearchHotel from "../../../Global/SearchHotel";

export default function FilterHotels() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { hotel } = useParams();
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
        getFilterHotels(dispatch, JSON.stringify(hotel), pagination.page);

    }, []);

    useEffect(() => {
        document.title = `Searching with "${hotel}"`
    })

    return (
        <section className="px-4 md:px-10 lg:px-16">
             <SearchHotel linkTo={`/super-admin`}/>
            <Title title="Hotels" />
            <div className="sm:mx-0 md:mx-2 lg:mx-3 xl:mx-4">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Hotel name</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Create owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.hotel.filterHotels && state.hotel.filterHotels.map((hotel, key) => {
                            return (
                                <tr key={key}>
                                    <td className="grid grid-cols-5">
                                        {key + 1}
                                    </td>
                                    <th>{hotel.name}</th>
                                    <td>{hotel.address}</td>
                                    <td>{hotel.price}</td>
                                    <td>
                                        <Link to={`/super-admin/create-owner/${hotel.id}`}>

                                            {hotel.userId === null ? (
                                                <Button color="primary">
                                                    Create
                                                </Button>
                                            ) : (
                                                <Button disabled>
                                                    Created
                                                </Button>
                                            )}
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </section>
    );
}