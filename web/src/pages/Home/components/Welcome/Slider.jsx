import React from "react";
import Slider from "react-slick";

import "react-image-lightbox/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "react-image-lightbox";

export default class SimpleSlider extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
        '//images.unsplash.com/photo-1563911302283-d2bc129e7570?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80',
        '//images.unsplash.com/photo-1568084680786-a84f91d1153c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80',
        '//images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80',
        '//images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    ]
    };
    componentDidUpdate(prevProps) {
        if (this.props.images !== prevProps.images) {
            this.setState({
                ...this.state,
                images: this.props.images
            });
        }
    }

    render() {
        const { photoIndex, isOpen, images } = this.state;
        // const url = process.env.REACT_APP_API_URL;

        var settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
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
        return (
            <div>
                {images.length !== 0 && (
                    <div className="mt-10" data-aos="fade-up">
                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={
                                    images[(photoIndex + 1) % images.length]
                                }
                                prevSrc={
                                    images[
                                        (photoIndex + images.length - 1) %
                                            images.length
                                    ]
                                }
                                onCloseRequest={() =>
                                    this.setState({
                                        ...this.state,
                                        isOpen: false
                                    })
                                }
                                onMovePrevRequest={() =>
                                    this.setState({
                                        ...this.state,
                                        photoIndex:
                                            (photoIndex + images.length - 1) %
                                            images.length
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        ...this.state,
                                        photoIndex:
                                            (photoIndex + 1) % images.length
                                    })
                                }
                            />
                        )}
                        <div className="mt-5 md:mt-0 relative">
                            <Slider {...settings}>
                                {images.map((element, i) => (
                                    <img
                                        src={element}
                                        key={i}
                                        alt="slider"
                                        className="h-96 w-full object-cover cursor-pointer p-1"
                                        onClick={() =>
                                            this.setState({
                                                ...this.state,
                                                photoIndex: i,
                                                isOpen: true
                                            })
                                        }
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
