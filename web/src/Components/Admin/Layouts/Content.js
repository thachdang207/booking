import React, {Suspense} from 'react';
import Loading from '../Loading/Loading';
import Hotel from "../FakeData/Hotels.json";
const Home = React.lazy(() => import('../Card/Home'))
const Pagination = React.lazy(() => import('../Pagination/Pagination'))

function Content() {
    return (
        <main className="bg-gray-100 bg-opacity-100 min-h-screen ">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 min-h-screen">
                <div className="px-4 py-6 sm:px-0 min-h-screen">
                    <div className="box-border p-4 border-4 bg-white rounded-md min-h-screen">
                        <div className="container my-12 mx-auto px-4 md:px-12">
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            <Suspense fallback={<Loading/>}>
                                <Home hotels={Hotel} />
                            </Suspense>
                            </div>
                        </div>
                        <Suspense fallback={<div></div>}>
                            <Pagination to={1} end={9} total={11} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Content;