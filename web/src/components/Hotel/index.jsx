import React, {useEffect, useState} from "react";
import Footer from "../Global/Footer";
import Border from "../Global/Border";
import Title from "../Global/Title";
import StaticHeader from "../Global/StaticHeader"

import HotelHero from "./HotelHero";
import HotelGoogleMap from './HotelGoogleMap'
import {getHotel} from "../../redux/actions/hotel.action";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useSecureLs} from "../Global/UseSecureLs";
import Searchbar from "./Searchbar";
import {getAvailableRoom} from "../../redux/actions/room.action";
import Rooms from "./Rooms";
import {Loading} from "../Global/Loading";

function Hotel() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let {id} = useParams();
    const [_user_id] = useSecureLs("user_id");
    const [userId, setUserId] = useState(_user_id);
    const [isFinding, setIsFinding] = useState(false);

    useEffect(() => {
        getHotel(dispatch, id)
    }, []); // eslint-disable-line

    useEffect(() => {
        setUserId(userId)
    }, []);


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

    const handleSearch = (values) => {
        getAvailableRoom(dispatch, state.hotel.hotel.id, values.startTime, values.endTime)
        setIsFinding(true);
        console.log("Search form: ", values);
    }
    const defaultLat = "16.06748182";
    const defaultLng = "108.24510790";

    return (
        <>
            {state.hotel.loading && <Loading />}
            <StaticHeader/>
            <HotelHero hotel={state.hotel.hotel}/>

            <Border/>
            <div className="relative font-serif text-lg m-10 px-12 pb-10 lg:px-48" data-aos="fade-up">
                <Title className="flex justify-center pb-10"
                       title={`About ${state.hotel.hotel.name}`}
                />
                <p>
                    {state.hotel.hotel.description}
                </p>
            </div>

            <Border/>
            <Searchbar onSubmit={handleSearch}/>

            <hr/>
            {state.hotel.hotel && (
                <Title title={`${state.hotel.hotel.name}'s Rooms`} data-aos="fade-up"/>
            )}
            <Rooms rooms={isFinding ? state.room.availableRooms : state.hotel.hotel.rooms}/>

            <Border my="16"/>

            {state.hotel.hotel && (
                <Title
                    title={`Where to find ${state.hotel.hotel.name} Hotel`}
                    data-aos="fade-up"
                />
            )}

            <div className="relative w-full" style={{height: "500px"}} data-aos="fade-up">
                <HotelGoogleMap
                    x={(state.hotel.hotel.coordinates !== undefined && state.hotel.hotel.coordinates !== null)
                        ? state.hotel.hotel.coordinates.latitude
                        : defaultLat}
                    y={(state.hotel.hotel.coordinates !== undefined && state.hotel.hotel.coordinates !== null)
                        ? state.hotel.hotel.coordinates.longitude
                        : defaultLng}
                />
            </div>


            <Border/>

            <Footer/>
        </>
    );
}

export default Hotel;

