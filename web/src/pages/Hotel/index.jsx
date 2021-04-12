import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Border from "../../components/Border";
import Title from "../../components/Title";
import Header from "../../components/Header"

import HotelHero from "./HotelHero";
import HotelGoogleMap from './HotelGoogleMap'

import { getHotel } from "../../redux/actions/hotel.action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSecureLs } from "../../components/UseSecureLs";

function Hotel(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let { id } = useParams();
    const [_user_id] = useSecureLs("user_id");
    const [userId, setUserId] = useState(_user_id);

    useEffect(() => {
        getHotel(dispatch, id);
    }, []); // eslint-disable-line

    useEffect(() => {
        setUserId(userId);
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
        document.title = `${state.hotel.hotel.name} Hotel`;
        return () => clearTimeout(timer);
    }, [state.hotel.hotel]); // eslint-disable-line
    return (
        <>
            <Header />
            <HotelHero hotel={state.hotel.hotel} />

            <div>
                <p>
                    {state.hotel.hotel.description}
                </p>
            </div>

            {state.hotel.hotel && (
                <Title title={`${state.hotel.hotel.name}'s Rooms`} />
            )}

            <Border my="16" />

            {state.hotel.hotel && (
                <Title
                    title={`Where to find ${state.hotel.hotel.name} Hotel`}
                />
            )}

            <div className="relative w-full" style={{ height: "400px" }}>
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

