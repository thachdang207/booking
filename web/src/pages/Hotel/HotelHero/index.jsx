import React from "react";
import { Badge } from 'reactstrap'

function HotelHero({ hotel: { name, price, score, images, address} }) {
    return (
        <div className="flex flex-col justify-center items-center relative">
            <div
                className="absolute z-10 w-full h-full top-0"
            ></div>
            <img
                src={
                    images ?
                        images[0] :
                        "http://placehold.it/500x500?text=hotel"
                }
                alt="hotel"
                className="w-full h-screen object-cover"
            />
            <div className="flex items-center justify-between w-full absolute bottom-0">
                <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between py-2 px-8 lg:px-48 w-full
                        z-10"
                    style={{
                        boxShadow: "inset 0px -100px 25px rgba(0, 0, 0, 0.7)"
                    }}
                >   
                    <div className="text-gray-100">
                        <h1 className="text-3xl text-gray-50 font-semibold">
                            {name}
                        </h1>
                        <span className="text-md">
                            {address}
                        </span>
                    </div>
                    <div className="text-gray-100 text-xl mt-2 md:mt-0">
                        Starting From{" "} {price}
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
