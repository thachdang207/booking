import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotelImages } from "../../../../redux/actions/hotel.action";
import Slider from "./Slider";

function Welcome() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        getHotelImages(dispatch);
    }, []); // eslint-disable-line

    return (
        <section>
            <div className="mt-0 p-4 xl:px-48 ">
                <div className="text-center ">
                    <h2 className="text-4xl font-bold text-gray-800 font-serif">
                        Welcome to VIBO.com
                    </h2>

                    <p className="text-gray-600 mt-5 font-serif">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam molestias qui, tempora adipisci rerum sit magnam voluptas sequi exercitationem quasi unde accusantium debitis illo?
                    </p>
                </div>
                
                <Slider images={state.hotel.images} />
            </div>
        </section>
    );
}

export default Welcome;