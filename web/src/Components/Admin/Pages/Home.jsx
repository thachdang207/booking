import React from 'react'
import Card from '../Components/Card/card';
import Hotel from "../FakeData/Hotels.json";
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
// const Pagination = React.lazy(() => import('../Pagination/Pagination'))

Home.defaultProps = {
    hotels: Hotel
};
function Home(props) {
    const { hotels } = props;
    
    return (
        <main className="bg-gray-100 bg-opacity-100 min-h-screen ">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 min-h-screen">
                <div className="px-4 py-6 sm:px-0 min-h-screen">
                    <div className="box-border p-4 border-4 bg-white rounded-md min-h-screen">
                        <div className="container my-12 mx-auto px-4 md:px-12">
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                    <Card hotels={hotels} />
                                    <Pagination to={1} end={9} total={11} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;