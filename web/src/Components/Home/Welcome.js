import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "./Slider";
import { getHotelImages } from "../../redux/actions/hotel.action";

function Welcome() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        getHotelImages(dispatch);
    }, []); // eslint-disable-line

    return (
        <section>
            <div className="mt-8 p-8 xl:px-48 ">
                <div className="text-center ">
                    <h2 className="text-4xl font-semibold text-gray-800 font-serif">
                        Welcome to VIBO.com
                    </h2>

                    <p className="text-gray-600 mt-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis impedit ullam ex nostrum 
                        rem accusamus modi necessitatibus nesciunt tempora aperiam quam, dignissimos rerum tenetur 
                        voluptatum sunt excepturi, nulla officia explicabo saepe provident autem obcaecati voluptate
                         culpa magnam. Sint id dolor maiores voluptatibus et consequatur,
                         consequuntur itaque tenetur ducimus eum vitae fugiat nisi, repellendus impedit ratione unde!
                    </p>
                </div>

                <Slider images={state.hotel.images} />
            </div>
        </section>
    );
}

export default Welcome;