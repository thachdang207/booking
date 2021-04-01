/* eslint-disable no-sequences */
import React, { useEffect } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux"
import { getHotelImages } from "../../../../redux/actions/hotel.action"

import "react-image-lightbox/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function HotelSlider() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        getHotelImages(dispatch);
    }, []); // eslint-disable-line
    const images = state.hotel.images;

    var settings = {
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        fade: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <>
            {images !== null && (
                <div className="m-0 p-0" data-aos="fade-up">
                    <div className="m-0 md:mt-0 relative p-0">
                        <Slider {...settings}>
                            {images.map((element, i) => (
                                <img
                                    src={element}
                                    key={i}
                                    alt="slider"
                                    className="h-screen w-full object-cover"
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default HotelSlider
