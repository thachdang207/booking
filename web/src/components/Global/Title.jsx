import React from "react";

function Title({ title }) {
    return (
        <div className="my-8 md:px-16 xl:px-24 font-serif">
            <h2 className="text-4xl text-center font-semibold text-gray-800 ">
                {title}
            </h2>
            <br />
        </div>
    );
}

export default Title;