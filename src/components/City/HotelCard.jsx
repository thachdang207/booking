import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap"


function HotelCard({ hotel: { id, name, price, score, images } }) {
    const formattedPrice = price.slice(1);
    return (
        <div className="p-0 lg:p-3">
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
                            className="w-full h-48 xl:h-72 object-cover"
                            alt="hotel"
                        />
                        <div className="flex items-center justify-between w-full absolute bottom-0">
                            <div className="absolute w-full h-full bg-gray-800 opacity-50"></div>
                            <div className="flex items-center justify-between p-2 w-full z-10 h-12">
                                <div className="flex items-center justify-between">
                                    <h3>
                                        <Badge color="primary">{score}</Badge>
                                    </h3>
                                </div>
                                <div className="text-gray-100 font-semibold">
                                    Around {formattedPrice} VND
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="p-4 text-lg uppercase font-bold font-sans-roboto text-center text-gray-800 hover:text-gray-600">
                        {name}
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default HotelCard;