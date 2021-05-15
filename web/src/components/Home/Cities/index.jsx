import React, {useEffect} from 'react';
import {getCities} from "../../../redux/actions/city.action";
import {useDispatch, useSelector} from "react-redux";
import CityCard from "./CityCard";
import Slider from "react-slick"
import Title from "../../Global/Title";

function Cities() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        const timer = setTimeout(() => {
            getCities(dispatch);
        }, 3000)
        return () => clearTimeout(timer)
    }, []);

    const settings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 3000,
        autoplaySpeed: 3000,
        arrows: true,
        className: "overflow-x-hidden",
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div>
            <Title title="The most attractive destinations in Vietnam"/>
            <Slider {...settings}>
                {state && state.city.cities.map((city) => (
                        <CityCard key={city.id} city={city}/>
                    )
                )}
            </Slider>
        </div>
    );
}

export default Cities;
