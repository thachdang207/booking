import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getRoom } from '../../../redux/actions/room.action'

function HotelRoom(cityId) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        getRoom(dispatch, cityId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div>
            <h1>{state.room.name}</h1>
        </div>
    );
}

export default HotelRoom;
