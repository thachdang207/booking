import React, {useEffect} from 'react'
import Title from '../../Global/Title'
import { useDispatch, useSelector } from 'react-redux'
import { getCities } from '../../../redux/actions/city.action'
import { Link } from 'react-router-dom'

function Cities() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        getCities(dispatch);
    },[dispatch]);
    
    return (
        <> 
            <Title title="The most attractive destinations in Vietnam" />
            <div className="flex mx-auto px-8 py-5" data-aos="fade-up">
                {state.city && state.city.cities.map((city) => {
                    return(
                        <Link to={`/city/${city.id}`} key={city.id} className="no-underline hover:no-underline text-black hover:text-gray-700 px-8 mx-auto">
                            <div className="w-full mx-auto cursor-pointer px-4">
                                <div className="w-60 h-60 flex items-center justify-center">
                                    <img src={city.thumbnail} alt="city" className="w-56 h-56 object-cover rounded-full hover:shadow-2xl"/>
                                </div>
                                <p className="mx-16 mt-3 text-lg font-semibold font-serif">
                                    {city.name}
                                </p>
                                {/* <span className="text-md font-sans font-bold mx-10"
                                >{city.averagePrice.slice(1)} VND </span> */}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Cities;
