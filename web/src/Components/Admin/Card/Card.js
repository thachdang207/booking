import React, { useState } from 'react'
import Pagination from '../Pagination/Pagination'

function Card() {
    const [hoverCard, setHoverCard] = useState(false);
    return (
        <main className="bg-gray-100 bg-opacity-100 min-h-screen ">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 min-h-screen">
                <div className="px-4 py-6 sm:px-0 min-h-screen">
                    <div className="box-border p-4 border-4 bg-white rounded-md min-h-screen">
                        <div class="container my-12 mx-auto px-4 md:px-12">
                            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110" onMouseOver={() => setHoverCard(!hoverCard)} onMouseOut={() => setHoverCard(!hoverCard)}>
                                    <article class="overflow-hidden rounded-lg shadow-lg">
                                        <div class="relative flex justify-center items-center">
                                            <a href="#">
                                                <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                            </a>
                                            <div className={"absolute " + ( hoverCard ? `opacity-100` : `opacity-0`)}>
                                                <button class="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ">
                                                    Delete
                                                </button>
                                                <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                        

                                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 class="text-lg">
                                                <a class="no-underline hover:underline text-black" href="#">
                                                    Article Title
                                                </a>
                                            </h1>
                                            <p class="text-grey-darker text-sm">
                                                14/4/19
                                            </p>
                                        </header>

                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p class="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </a>
                                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                <span class="hidden">Like</span>
                                                <i class="fa fa-heart"></i>
                                            </a>
                                        </footer>

                                    </article>

                                </div>

                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110">

                                    <article class="overflow-hidden rounded-lg shadow-lg">

                                        <a href="#">
                                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                        </a>

                                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 class="text-lg">
                                                <a class="no-underline hover:underline text-black" href="#">
                                                    Article Title
                                                </a>
                                            </h1>
                                            <p class="text-grey-darker text-sm">
                                                14/4/19
                                            </p>
                                        </header>

                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p class="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </a>
                                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                <span class="hidden">Like</span>
                                                <i class="fa fa-heart"></i>
                                            </a>
                                        </footer>

                                    </article>

                                </div>

                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110">

                                    <article class="overflow-hidden rounded-lg shadow-lg">

                                        <a href="#">
                                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                        </a>

                                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 class="text-lg">
                                                <a class="no-underline hover:underline text-black" href="#">
                                                    Article Title
                                                </a>
                                            </h1>
                                            <p class="text-grey-darker text-sm">
                                                14/4/19
                                            </p>
                                        </header>

                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p class="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </a>
                                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                <span class="hidden">Like</span>
                                                <i class="fa fa-heart"></i>
                                            </a>
                                        </footer>

                                    </article>

                                </div>

                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110">

                                    <article class="overflow-hidden rounded-lg shadow-lg">

                                        <a href="#">
                                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                        </a>

                                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 class="text-lg">
                                                <a class="no-underline hover:underline text-black" href="#">
                                                    Article Title
                                                </a>
                                            </h1>
                                            <p class="text-grey-darker text-sm">
                                                14/4/19
                                            </p>
                                        </header>

                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p class="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </a>
                                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                <span class="hidden">Like</span>
                                                <i class="fa fa-heart"></i>
                                            </a>
                                        </footer>

                                    </article>

                                </div>

                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110">

                                    <article class="overflow-hidden rounded-lg shadow-lg">

                                        <a href="#">
                                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                        </a>

                                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 class="text-lg">
                                                <a class="no-underline hover:underline text-black" href="#">
                                                    Article Title
                                                </a>
                                            </h1>
                                            <p class="text-grey-darker text-sm">
                                                14/4/19
                                            </p>
                                        </header>

                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p class="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </a>
                                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                <span class="hidden">Like</span>
                                                <i class="fa fa-heart"></i>
                                            </a>
                                        </footer>

                                    </article>

                                </div>

                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110">

                                    <article class="overflow-hidden rounded-lg shadow-lg">

                                        <a href="#">
                                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                        </a>

                                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 class="text-lg">
                                                <a class="no-underline hover:underline text-black" href="#">
                                                    Article Title
                                                </a>
                                            </h1>
                                            <p class="text-grey-darker text-sm">
                                                14/4/19
                                            </p>
                                        </header>

                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p class="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </a>
                                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                <span class="hidden">Like</span>
                                                <i class="fa fa-heart"></i>
                                            </a>
                                        </footer>

                                    </article>

                                </div>

                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110">

                                    <article class="overflow-hidden rounded-lg shadow-lg">

                                        <a href="#">
                                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                        </a>

                                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 class="text-lg">
                                                <a class="no-underline hover:underline text-black" href="#">
                                                    Article Title
                                                </a>
                                            </h1>
                                            <p class="text-grey-darker text-sm">
                                                14/4/19
                                            </p>
                                        </header>

                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p class="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </a>
                                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                <span class="hidden">Like</span>
                                                <i class="fa fa-heart"></i>
                                            </a>
                                        </footer>

                                    </article>

                                </div>

                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110">

                                    <article class="overflow-hidden rounded-lg shadow-lg">

                                        <a href="#">
                                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                        </a>

                                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 class="text-lg">
                                                <a class="no-underline hover:underline text-black" href="#">
                                                    Article Title
                                                </a>
                                            </h1>
                                            <p class="text-grey-darker text-sm">
                                                14/4/19
                                            </p>
                                        </header>

                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p class="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </a>
                                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                <span class="hidden">Like</span>
                                                <i class="fa fa-heart"></i>
                                            </a>
                                        </footer>

                                    </article>

                                </div>

                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110">

                                    <article class="overflow-hidden rounded-lg shadow-lg">

                                        <a href="#">
                                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                        </a>

                                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 class="text-lg">
                                                <a class="no-underline hover:underline text-black" href="#">
                                                    Article Title
                                                </a>
                                            </h1>
                                            <p class="text-grey-darker text-sm">
                                                14/4/19
                                            </p>
                                        </header>

                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p class="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </a>
                                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                                <span class="hidden">Like</span>
                                                <i class="fa fa-heart"></i>
                                            </a>
                                        </footer>

                                    </article>

                                </div>

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