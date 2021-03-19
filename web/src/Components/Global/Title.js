import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Title({ title }) {
    return (
        <div className="my-8 md:px-16 xl:px-24 font-serif">
            <h2 className="text-4xl text-center font-semibold text-gray-800 ">
                {title}
            </h2>
            <br />
            <div className="text-center">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
        </div>
    );
}

export default Title;