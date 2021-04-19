import React from 'react'
import Title from '../../../components/Title'
import Slider from "react-slick";
import { CITY_OPTIONS } from '../../../constants/global'

function Citys() {
    const citys = CITY_OPTIONS;
    var settings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        speed: 2000,
        autoplaySpeed: 2000,
        className: "overflow-x-hidden",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <> 
            <Title title="The most attractive destinations in Vietnam" />
            <div className="flex mx-auto px-8 py-5" data-aos="fade-left">
                <Slider {...settings}>
                    {citys && citys.map((city, i) => {
                        return(
                            <div className="w-full mx-auto cursor-pointer px-4" key={i}>
                                <div className="w-48 h-48 flex items-center justify-center">
                                    <img src={city.image} alt="city" className="w-44 h-44 object-cover rounded-full hover:shadow-2xl"/>
                                </div>
                                <p className="mx-12 text-lg font-semibold font-serif">
                                    {city.label}
                                </p>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}

export default Citys;
