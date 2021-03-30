/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { getHotelImages } from "../../../../redux/actions/hotel.action";
import Slider from "react-slick";

import "react-image-lightbox/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "react-image-lightbox";

export default function SimpleSlider(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => getHotelImages(dispatch), []); // eslint-disable-line
    

    var settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        arrows: true,
        className: "rounded-md overflow-x-hidden shadow-xl",
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
    return(
        <div></div>
            // <div>
            // //     {state.hotel.images.map((hotel) =>{
            // //         return(
            // //             <div className="mt-10 p-0" data-aos="fade-up">
            // //             {/* {isOpen && (
            // //                 // <Lightbox
            // //                 //     mainSrc={hotel.images}
            // //                 //     nextSrc={
            // //                 //         images[(photoIndex + 1) % images.length]
            // //                 //     }
            // //                 //     prevSrc={
            // //                 //         images[
            // //                 //             (photoIndex + images.length - 1) %
            // //                 //                 images.length
            // //                 //         ]
            // //                 //     }
            // //                 //     onCloseRequest={() =>
            // //                 //         setIsOpen({
            // //                 //             isOpen: false
            // //                 //         })
            // //                 //     }
            // //                 //     onMovePrevRequest={() =>
            // //                 //         setPhotoIndex({
            // //                 //             photoIndex:
            // //                 //                 (photoIndex + images.length - 1) %
            // //                 //                 images.length
            // //                 //         })
            // //                 //     }
            // //                 //     onMoveNextRequest={() =>
            // //                 //         setPhotoIndex({
            // //                 //             photoIndex:
            // //                 //                 (photoIndex + 1) % images.length
            // //                 //         })
            // //                 //     }
            // //                 // />
            // //             )} */}
            // //             <div className="mt-5 md:mt-0 relative p-0">
            // //                 <Slider {...settings}>
            // //                     {hotel.map((element, i) => (
            // //                         <img
            // //                             src={element}
            // //                             key={i}
            // //                             alt="slider"
            // //                             className="h-96 w-full object-cover cursor-pointer p-1"
            // //                             onClick={() =>
            // //                                 setIsOpen({
            // //                                     isOpen: true,
            // //                                 })
            // //                             }
            // //                         />
            // //                     ))}
            // //                 </Slider>
            // //             </div>
            // //         </div>
            // //         )
            // //     })}
            // </div>
    )
}
