import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function ClientReviewCard({ avatar, name, location, rating, review }) {
    return (
        <div
            className="mt-16 flex flex-col md:w-1/3 bg-gray-100 text-center text-gray-700 rounded-sm  p-8 m-2 items-center shadow-lg"
            data-aos="fade-up"
        >
            <img
                src={avatar}
                alt="avatar"
                className="w-24 h-24 -mt-20 rounded-full object-cover border-4 border-gray-400"
            />
            <span className="mt-2 text-xl">{name}</span>
            <span className="mt-2 text-gray-600">{location}</span>
            <div className="border-t w-48 mt-6"></div>
            <span className="mt-6 text-yellow-500 ">
                {Array(rating)
                    .fill()
                    .map((x, i) => (
                        <FontAwesomeIcon icon={faStar} key={i} />
                    ))}
            </span>
            <p className="mt-6 leading-7">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-gray-300 mr-2"/>
                {" "}
                {review}
                {" "}
                <FontAwesomeIcon icon={faQuoteRight} className="text-gray-300 mr-2"/>
            </p>
        </div>
    );
}

export default ClientReviewCard;
