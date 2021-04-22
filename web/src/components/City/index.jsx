import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCityHotels } from '../../redux/actions/hotel.action'
import { useParams } from 'react-router-dom'
import Title from "../Global/Title"
import HotelCard from './HotelCard'

export default function City() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const state = useSelector(state => state.state);

    useEffect(() => {
        const timer = setTimeout(() => {
            getCityHotels(dispatch, id)
        }, 500);

        return () => clearTimeout(timer);
    }, [dispatch, id]);

    return (
        <section className="px-20 py-12 md:px-40 lg:px-56">
            <Title title="Hotels" />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                {state && state.hotel.cityHotels.map((hotel) => (
                    <HotelCard hotel={hotel} key={hotel.id} />
                ))}
            </div>
        </section>
    )
}
