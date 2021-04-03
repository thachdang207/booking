import React from "react";
import { Link } from "react-router-dom";


function HotelCard({ hotel: { id, name, price, score, images } }) {
    const formattedPrice = price.slice(1);
    return (
        <div className="p-4">
            <div
                className="bg-gray-100 h-96 rounded-xl overflow-hidden shadow-lg mt-0"
                data-aos="fade-up"
            >
                <Link to={`/hotel/${id}`}>
                    <div className="relative">
                        <img
                            src={
                                images ?
                                images[0]:
                                "http://placehold.it/500x500?text=hotel"
                            }
                            className="w-full h-64 object-cover"
                            alt="hotel"
                        />
                        <div className="flex items-center justify-between w-full absolute bottom-0">
                            <div className="absolute w-full h-full bg-gray-800 opacity-50"></div>
                            <div className="flex items-center justify-between p-2 w-full z-10 h-12">
                                <div className="flex items-center justify-between">
                                    <p className="text-white text-xl">
                                        {score}
                                    </p>
                                </div>
                                <div className="text-gray-100 font-semibold">
                                    Starting From {formattedPrice} VND
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="p-5 uppercase text-xl font-bold font-sans-roboto text-center text-indigo-800 hover:text-indigo-600 no-underline">
                        Hotel {name}
                    </h2>
                </Link>
            </div>
        </div>
    );
}

export default HotelCard;