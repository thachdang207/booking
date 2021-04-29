import React, {useEffect} from "react";
import StaticHeader from "../Global/StaticHeader";
import Footer from "../Global/Footer";
import Border from "../Global/Border";

import {getSpecificRoom} from "../../redux/actions/room.action";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

function Room() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let {id} = useParams();

    useEffect(() => {
        getSpecificRoom(dispatch, id);
    }, []); // eslint-disable-line
    useEffect(() => {
        document.title = `${state.room.room.name}`;
    }, [state.room.room]); // eslint-disable-line
    return (
        <>
            <StaticHeader/>
            <div className="">
                <h1>{state.room.room.name}</h1>
            </div>
            <Border/>

            <Footer/>
        </>
    );
}

export default Room;
