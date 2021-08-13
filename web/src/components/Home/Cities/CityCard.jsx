import React from 'react'
import {Link} from 'react-router-dom'

export default function CityCard({city: {id, thumbnail, name}}) {

    return (
        <div>
            <div className="mx-auto px-20" data-aos="fade-up">
                <div>
                    <Link to={`/city/${id}`}
                          className="no-underline hover:no-underline text-black hover:text-gray-700">
                        <div className="w-full cursor-pointer px-4">
                            <div className="w-96 h-96 flex flex-col items-center justify-center">
                                <img
                                    src={thumbnail}
                                    alt="city"
                                    className="w-64 h-64 rounded-full object-cover hover:shadow-2xl"/>
                                <p className="mt-10 text-3xl font-semibold font-sans">
                                    {name}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
