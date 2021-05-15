/* eslint-disable no-sequences */
import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types'
import styled, {css} from "styled-components/macro"
import {SLIDER_HOTEL} from '../../../constants/hotel'
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'

import "./Hero.css"

Hero.propTypes = {
    onClick: PropTypes.func,
}

Hero.defaultProps = {
    onClick: null,
}

const arrowButton = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 300ms;

  &:hover {
    color: rgb(0, 0, 0);
    background-color: #fff;
    transform: scale(1.15)
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButton}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButton}
`;

function Hero(props) {
    const slider = SLIDER_HOTEL;

    const [current, setCurrent] = useState(0)
    const length = slider.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 5000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slider) || slider.length <= 0) {
        return null
    }

    return (
        <section className="hero-section" data-aos="fade-up">
            <div className="hero-wrapper">
                {slider.map((slide, index) => {
                    return (
                        <div className="hero-slide" key={index}>
                            {index === current && (
                                <div className="hero-slider">
                                    <img
                                        src={slide.image}
                                        key={index}
                                        alt={slide.alt}
                                        className="hero-image"
                                        data-aos="fade"
                                        data-aos-duration="3000"
                                    />
                                    <div className="hero-content">
                                        <h1>{slide.title}</h1>
                                        <p>Starting from {" "}{slide.price}</p>
                                        <button className="hero-button" onClick={props.onClick}>
                                            {slide.label}
                                            <Arrow/>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })};
                <div className="slider-button">
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </div>
            </div>
        </section>
    )
}

export default Hero
