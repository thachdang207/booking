import React, { useEffect, useState } from "react";
import Footer from "../Global/Footer";
import Border from "../Global/Border";
import Title from "../Global/Title";
import StaticHeader from "../Global/StaticHeader"

import HotelHero from "./HotelHero";
import HotelRoom from './HotelRoom'
import HotelGoogleMap from './HotelGoogleMap'

import { getHotel } from "../../redux/actions/hotel.action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSecureLs } from "../Global/UseSecureLs";

function Hotel(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let { id } = useParams();
    const [_user_id] = useSecureLs("user_id");
    const [userId, setUserId] = useState(_user_id);

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

            <HotelRoom cityId={state.hotel.hotel.cityId} />

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

