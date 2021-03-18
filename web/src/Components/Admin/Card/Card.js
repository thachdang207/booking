import React, { useState } from 'react'
import Pagination from '../Pagination/Pagination'

function Card() {
    const [hoverCard, setHoverCard] = useState(0);
    const fakeData = [
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 3
        },
        {
            id: 4,
            value: 4
        },
        {
            id: 5,
            value: 5
        },
        {
            id: 6,
            value: 6
        },
        {
            id: 7,
            value: 7
        },
        {
            id: 8,
            value: 8
        },
        {
            id: 9,
            value: 9
        },
    ];
    return (
        <main className="bg-gray-100 bg-opacity-100 min-h-screen ">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 min-h-screen">
                <div className="px-4 py-6 sm:px-0 min-h-screen">
                    <div className="box-border p-4 border-4 bg-white rounded-md min-h-screen">
                        <div className="container my-12 mx-auto px-4 md:px-12">
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                { fakeData.map( (item, index) => {
                                    return (
                                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110"
                                            onMouseOver={() => {setHoverCard(item.value); console.log(hoverCard)}} 
                                            onMouseLeave={() => {setHoverCard(0); console.log(hoverCard)}} 
                                            key={index}
                                        >
                                            <article className="overflow-hidden rounded-lg shadow-lg">
                                                <div className="relative flex justify-center items-center">
                                                    <a href="#">
                                                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                                    </a>
                                                    <div className={"absolute " + ( hoverCard === item.value ? `opacity-100` : `opacity-0`)}>
                                                        <button className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ">
                                                            Delete
                                                        </button>
                                                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                                

                                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                    <h1 className="text-lg">
                                                        <a className="no-underline hover:underline text-black" href="#">
                                                            Article Title
                                                        </a>
                                                    </h1>
                                                    <p className="text-grey-darker text-sm">
                                                        14/4/19
                                                    </p>
                                                </header>

                                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                                                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                        <p className="ml-2 text-sm">
                                                            Author Name
                                                        </p>
                                                    </a>
                                                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                        <span className="hidden">Like</span>
                                                        <i className="fa fa-heart"></i>
                                                    </a>
                                                </footer>

                                            </article>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Card;