import React, { useEffect, useState } from "react";
import Footer from "../Global/Footer";
import Border from "../Global/Border";
import Title from "../Global/Title";
import StaticHeader from "../Global/StaticHeader"

import HotelHero from "./HotelHero";
import HotelGoogleMap from './HotelGoogleMap'

import { getHotel } from "../../redux/actions/hotel.action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSecureLs } from "../Global/UseSecureLs";
import { Table, Button } from "reactstrap"
import { Link } from "react-router-dom"

function Hotel(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let { id } = useParams();
    const [_user_id] = useSecureLs("user_id");
    const [userId, setUserId] = useState(_user_id);

    const formatPrice = (price) => {
        let priceString= '';
        price = Math.floor(price);
        while (price > 999) {
            var num = price % 1000;
            priceString += '.' + num ;
            price = Math.floor(price/ 1000);
            if (price <= 999) {
                priceString = price + '' + priceString;
                break;
            }
        }
        return priceString;
    }

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            n--;
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    useEffect(() => {
        getHotel(dispatch, id);
        setUserId(userId)
    }, []); // eslint-disable-line

    let history = useHistory();
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!state.hotel.hotel) {
                history.push({
                    pathname: "/404",
                    state: {
                        message:
                            "There is no such hotel, you'll be redirected in a bit"
                    }
                });
            }
        }, 3000);
        document.title = `${state.hotel.hotel.name}`;
        return () => clearTimeout(timer);
    }, [state.hotel.hotel]); // eslint-disable-line
    return (
        <>
            <StaticHeader />
            <HotelHero hotel={state.hotel.hotel} />

            <Border />
            <div className="relative font-serif text-lg m-10 px-12 pb-10 lg:px-48" data-aos="fade-up">
                <h1 className="flex justify-center font-semibold pb-10">
                    About {state.hotel.hotel.name}
                </h1>
                <p>
                    {state.hotel.hotel.description}
                </p>
            </div>

            <Border/>

            {state.hotel.hotel && (
                <Title title={`${state.hotel.hotel.name}'s Rooms`} data-aos="fade-up"/>
            )}
            <div className="lg:mx-20 xl:mx-40">
                <Table striped bordered hover data-aos="fade-up">
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Name</th>
                            <th>Maximum guests</th>
                            <th>Price</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.hotel.hotel && state.hotel.hotel.rooms.map((room) => {
                            return (
                                <tr key={room.id}>
                                    <td className="grid grid-cols-5">
                                        {getRandom(state.hotel.hotel.serviceTypes, Math.floor(Math.random() * 10) + 1).map((service, key) => {
                                            return(
                                                <div key={key}>
                                                    <img 
                                                        src={service.icon}
                                                        alt="service"
                                                        className="relative w-6 h-6 object-contain"
                                                    ></img>
                                                </div>
                                            )
                                        })}
                                    </td>
                                    <td>{room.name}</td>
                                    <td>{room.capacity}</td>
                                    <td>{formatPrice(room.price)} {" "} VND </td>
                                    <td>
                                        <Link
                                            to={`/room/${room.id}`}
                                            className="no-underline"
                                        >
                                            <Button>Book</Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>

            <Border my="16" />

            {state.hotel.hotel && (
                <Title
                    title={`Where to find ${state.hotel.hotel.name} Hotel`}
                    data-aos="fade-up"
                />
            )}

            <div className="relative w-full" style={{ height: "500px" }} data-aos="fade-up">
                <HotelGoogleMap
                    x={16.12203728}
                    y={108.31017494}
                />
            </div>

            <Border />

            <Footer />
        </>
    );
}

export default Hotel;

