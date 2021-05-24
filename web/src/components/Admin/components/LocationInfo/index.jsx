import React from 'react';
import Slider from "react-slick";
import {Button} from 'reactstrap'
import {Link} from "react-router-dom";

function LocationInfo({location: {images, name, address}}) {
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
        <div className="w-8/12 h-screen bg-gray-200 p-5 mr-20 my-3 rounded-sm">
            <div className="relative mx-auto">
                <Slider {...settings}>
                    {images && images.map((image, key) => {
                        return (
                            <img
                                src={
                                    image
                                        ? image
                                        : "http://placehold.it/300x300?text=hotel"
                                }
                                alt="hotel"
                                key={key}
                                className="w-48 h-48 object-cover px-0.5 my-5"
                            />
                        )
                    })}
                </Slider>
            </div>
            <div className="font-sans">
                <p className="font-semibold text-2xl">
                    <span className="font-light text-lg mx-4">Hotel name:</span>
                    {name}
                </p>
                <p className="font-semibold text-xl">
                    <span className="font-light text-lg mx-4">Address:</span>
                    {address}
                </p>
            </div>
            <Link to="/admin/update-location" className="no-underline">
                <Button color="primary">
                    Edit hotel information
                </Button>
            </Link>
        </div>
    );
}

export default LocationInfo;
