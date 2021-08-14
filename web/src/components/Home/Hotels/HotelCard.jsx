import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


function HotelCard({ hotel: { id, name, price, score, images, address } }) {
    const formatPrice = (price) => {
        if (price !== null) return price.slice(1)
        else return 0
    }
    return (
        <div className="px-3 py-2 transform hover:-translate-y-1 hover:scale-105">
            <div
                className="bg-gray-100 h-72 xl:h-96 rounded-xl overflow-hidden shadow-lg mt-0"
                data-aos="fade-up"
            >
                <Link to={`/hotel/${id}`} className="no-underline hover:no-underline">
                    <div className="relative">
                        <img
                            src={
                                images ?
                                    images[0] :
                                    "http://placehold.it/500x500?text=hotel"
                            }
                            className="w-full md:h-40 xl:h-64 object-cover"
                            alt="hotel"
                        />
                        <div className="flex items-center justify-between w-full absolute bottom-0">
                            <div className="absolute w-full h-full bg-gray-800 opacity-50" />
                            <div className="flex items-center justify-between p-2 w-full z-10 h-12">
                                <div className="flex items-center justify-between">
                                    <h3>
                                        <Badge color="primary">{score}</Badge>
                                    </h3>
                                </div>
                                <div className="text-gray-100 font-semibold">
                                    Around {formatPrice(price)} VND
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="p-4 text-xl uppercase font-bold font-sans text-center text-blue-800 hover:text-gray-600">
                        {name}
                        <br />
                        <span className="hidden lg:inline-block text-sm font-semibold mx-3 text-gray-700">
                            <FontAwesomeIcon className="text-blue-800" icon={faMapMarkerAlt} />
                            {" "} {address}
                        </span>
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default HotelCard;
