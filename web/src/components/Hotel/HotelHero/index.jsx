import React from "react";
import Slider from "react-slick";
import {Badge} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

function HotelHero({hotel: {name, price, score, images, address}}) {
    const settings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 4000,
        autoplaySpeed: 4000,
        arrows: true,
        className: "overflow-x-hidden",
        responsive: [
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
        <div className="flex justify-center items-center relative">
            <div className="relative w-full h-96 top-0 z-10">
                <Slider {...settings}>
                    {images && images.map((image, key) => {
                            return (
                                <img
                                    src={image}
                                    key={key}
                                    alt="hotel"
                                    className="object-cover w-96 h-96 px-0.5"
                                />
                            )
                        }
                    )}
                </Slider>
            </div>
            <div className="flex items-center justify-between w-full absolute bottom-0">
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between py-2 px-8 lg:px-48 w-full
                        z-10"
                    style={{
                        boxShadow: "inset 0px -100px 25px rgba(0, 0, 0, 0.5)"
                    }}
                >
                    <div className="text-gray-100">
                        <h1 className="text-3xl uppercase text-gray-50 font-semibold">
                            {name}
                        </h1>
                        <span className="text-md">
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            {" "}{address}
                        </span>
                    </div>
                    <div className="text-gray-100 text-xl mt-2 md:mt-0">
                        Just around {" "} {price}
                        <h3>
                            <Badge color="primary">{score}</Badge>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelHero;
