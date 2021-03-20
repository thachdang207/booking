import React, { useState } from 'react'


function Card(props) {
    const [hoverCard, setHoverCard] = useState(0);
    const { hotels } = props;
    return (
        hotels.map((hotel, index) => {
            return (
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110"
                    onMouseOver={() => setHoverCard(hotel.id)} 
                    onMouseLeave={() => setHoverCard(0)} 
                    key={index}
                >
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <div className="relative flex justify-center items-center">
                            <a href="#">
                                <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                            </a>
                            <div className={"absolute " + ( hoverCard === hotel.id ? `opacity-100` : `opacity-0`)}>
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
                                    {hotel.name}
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm flex mr-5">
                                {hotel.theNumberOfPeople}x<img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItNDIgMCA1MTIgNTEyLjAwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjEwLjM1MTU2MiAyNDYuNjMyODEyYzMzLjg4MjgxMyAwIDYzLjIyMjY1Ny0xMi4xNTIzNDMgODcuMTk1MzEzLTM2LjEyODkwNiAyMy45NzI2NTYtMjMuOTcyNjU2IDM2LjEyNS01My4zMDQ2ODcgMzYuMTI1LTg3LjE5MTQwNiAwLTMzLjg3NS0xMi4xNTIzNDQtNjMuMjEwOTM4LTM2LjEyODkwNi04Ny4xOTE0MDYtMjMuOTc2NTYzLTIzLjk2ODc1LTUzLjMxMjUtMzYuMTIxMDk0LTg3LjE5MTQwNy0zNi4xMjEwOTQtMzMuODg2NzE4IDAtNjMuMjE4NzUgMTIuMTUyMzQ0LTg3LjE5MTQwNiAzNi4xMjVzLTM2LjEyODkwNiA1My4zMDg1OTQtMzYuMTI4OTA2IDg3LjE4NzVjMCAzMy44ODY3MTkgMTIuMTU2MjUgNjMuMjIyNjU2IDM2LjEzMjgxMiA4Ny4xOTUzMTIgMjMuOTc2NTYzIDIzLjk2ODc1IDUzLjMxMjUgMzYuMTI1IDg3LjE4NzUgMzYuMTI1em0wIDAiLz48cGF0aCBkPSJtNDI2LjEyODkwNiAzOTMuNzAzMTI1Yy0uNjkxNDA2LTkuOTc2NTYzLTIuMDg5ODQ0LTIwLjg1OTM3NS00LjE0ODQzNy0zMi4zNTE1NjMtMi4wNzgxMjUtMTEuNTc4MTI0LTQuNzUzOTA3LTIyLjUyMzQzNy03Ljk1NzAzMS0zMi41MjczNDMtMy4zMDg1OTQtMTAuMzM5ODQ0LTcuODA4NTk0LTIwLjU1MDc4MS0xMy4zNzEwOTQtMzAuMzM1OTM4LTUuNzczNDM4LTEwLjE1NjI1LTEyLjU1NDY4OC0xOS0yMC4xNjQwNjMtMjYuMjc3MzQzLTcuOTU3MDMxLTcuNjEzMjgyLTE3LjY5OTIxOS0xMy43MzQzNzYtMjguOTY0ODQzLTE4LjE5OTIxOS0xMS4yMjY1NjMtNC40NDE0MDctMjMuNjY3OTY5LTYuNjkxNDA3LTM2Ljk3NjU2My02LjY5MTQwNy01LjIyNjU2MyAwLTEwLjI4MTI1IDIuMTQ0NTMyLTIwLjA0Mjk2OSA4LjUtNi4wMDc4MTIgMy45MTc5NjktMTMuMDM1MTU2IDguNDQ5MjE5LTIwLjg3ODkwNiAxMy40NjA5MzgtNi43MDcwMzEgNC4yNzM0MzgtMTUuNzkyOTY5IDguMjc3MzQ0LTI3LjAxNTYyNSAxMS45MDIzNDQtMTAuOTQ5MjE5IDMuNTQyOTY4LTIyLjA2NjQwNiA1LjMzOTg0NC0zMy4wMzkwNjMgNS4zMzk4NDQtMTAuOTcyNjU2IDAtMjIuMDg1OTM3LTEuNzk2ODc2LTMzLjA0Njg3NC01LjMzOTg0NC0xMS4yMTA5MzgtMy42MjEwOTQtMjAuMjk2ODc2LTcuNjI1LTI2Ljk5NjA5NC0xMS44OTg0MzgtNy43Njk1MzItNC45NjQ4NDQtMTQuODAwNzgyLTkuNDk2MDk0LTIwLjg5ODQzOC0xMy40Njg3NS05Ljc1LTYuMzU1NDY4LTE0LjgwODU5NC04LjUtMjAuMDM1MTU2LTguNS0xMy4zMTI1IDAtMjUuNzUgMi4yNTM5MDYtMzYuOTcyNjU2IDYuNjk5MjE5LTExLjI1NzgxMyA0LjQ1NzAzMS0yMS4wMDM5MDYgMTAuNTc4MTI1LTI4Ljk2ODc1IDE4LjE5OTIxOS03LjYwNTQ2OSA3LjI4MTI1LTE0LjM5MDYyNSAxNi4xMjEwOTQtMjAuMTU2MjUgMjYuMjczNDM3LTUuNTU4NTk0IDkuNzg1MTU3LTEwLjA1ODU5NCAxOS45OTIxODgtMTMuMzcxMDk0IDMwLjMzOTg0NC0zLjE5OTIxOSAxMC4wMDM5MDYtNS44NzUgMjAuOTQ1MzEzLTcuOTUzMTI1IDMyLjUyMzQzNy0yLjA1ODU5NCAxMS40NzY1NjMtMy40NTcwMzEgMjIuMzYzMjgyLTQuMTQ4NDM3IDMyLjM2MzI4Mi0uNjc5Njg4IDkuNzk2ODc1LTEuMDIzNDM4IDE5Ljk2NDg0NC0xLjAyMzQzOCAzMC4yMzQzNzUgMCAyNi43MjY1NjIgOC40OTYwOTQgNDguMzYzMjgxIDI1LjI1IDY0LjMyMDMxMiAxNi41NDY4NzUgMTUuNzQ2MDk0IDM4LjQ0MTQwNiAyMy43MzQzNzUgNjUuMDY2NDA2IDIzLjczNDM3NWgyNDYuNTMxMjVjMjYuNjI1IDAgNDguNTExNzE5LTcuOTg0Mzc1IDY1LjA2MjUtMjMuNzM0Mzc1IDE2Ljc1NzgxMy0xNS45NDUzMTIgMjUuMjUzOTA2LTM3LjU4NTkzNyAyNS4yNTM5MDYtNjQuMzI0MjE5LS4wMDM5MDYtMTAuMzE2NDA2LS4zNTE1NjItMjAuNDkyMTg3LTEuMDM1MTU2LTMwLjI0MjE4N3ptMCAwIi8+PC9zdmc+" />
                                {/* {(Array.apply(null, {length: item.theNumberOfPeople})).map((val, key) => {
                                    return <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItNDIgMCA1MTIgNTEyLjAwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjEwLjM1MTU2MiAyNDYuNjMyODEyYzMzLjg4MjgxMyAwIDYzLjIyMjY1Ny0xMi4xNTIzNDMgODcuMTk1MzEzLTM2LjEyODkwNiAyMy45NzI2NTYtMjMuOTcyNjU2IDM2LjEyNS01My4zMDQ2ODcgMzYuMTI1LTg3LjE5MTQwNiAwLTMzLjg3NS0xMi4xNTIzNDQtNjMuMjEwOTM4LTM2LjEyODkwNi04Ny4xOTE0MDYtMjMuOTc2NTYzLTIzLjk2ODc1LTUzLjMxMjUtMzYuMTIxMDk0LTg3LjE5MTQwNy0zNi4xMjEwOTQtMzMuODg2NzE4IDAtNjMuMjE4NzUgMTIuMTUyMzQ0LTg3LjE5MTQwNiAzNi4xMjVzLTM2LjEyODkwNiA1My4zMDg1OTQtMzYuMTI4OTA2IDg3LjE4NzVjMCAzMy44ODY3MTkgMTIuMTU2MjUgNjMuMjIyNjU2IDM2LjEzMjgxMiA4Ny4xOTUzMTIgMjMuOTc2NTYzIDIzLjk2ODc1IDUzLjMxMjUgMzYuMTI1IDg3LjE4NzUgMzYuMTI1em0wIDAiLz48cGF0aCBkPSJtNDI2LjEyODkwNiAzOTMuNzAzMTI1Yy0uNjkxNDA2LTkuOTc2NTYzLTIuMDg5ODQ0LTIwLjg1OTM3NS00LjE0ODQzNy0zMi4zNTE1NjMtMi4wNzgxMjUtMTEuNTc4MTI0LTQuNzUzOTA3LTIyLjUyMzQzNy03Ljk1NzAzMS0zMi41MjczNDMtMy4zMDg1OTQtMTAuMzM5ODQ0LTcuODA4NTk0LTIwLjU1MDc4MS0xMy4zNzEwOTQtMzAuMzM1OTM4LTUuNzczNDM4LTEwLjE1NjI1LTEyLjU1NDY4OC0xOS0yMC4xNjQwNjMtMjYuMjc3MzQzLTcuOTU3MDMxLTcuNjEzMjgyLTE3LjY5OTIxOS0xMy43MzQzNzYtMjguOTY0ODQzLTE4LjE5OTIxOS0xMS4yMjY1NjMtNC40NDE0MDctMjMuNjY3OTY5LTYuNjkxNDA3LTM2Ljk3NjU2My02LjY5MTQwNy01LjIyNjU2MyAwLTEwLjI4MTI1IDIuMTQ0NTMyLTIwLjA0Mjk2OSA4LjUtNi4wMDc4MTIgMy45MTc5NjktMTMuMDM1MTU2IDguNDQ5MjE5LTIwLjg3ODkwNiAxMy40NjA5MzgtNi43MDcwMzEgNC4yNzM0MzgtMTUuNzkyOTY5IDguMjc3MzQ0LTI3LjAxNTYyNSAxMS45MDIzNDQtMTAuOTQ5MjE5IDMuNTQyOTY4LTIyLjA2NjQwNiA1LjMzOTg0NC0zMy4wMzkwNjMgNS4zMzk4NDQtMTAuOTcyNjU2IDAtMjIuMDg1OTM3LTEuNzk2ODc2LTMzLjA0Njg3NC01LjMzOTg0NC0xMS4yMTA5MzgtMy42MjEwOTQtMjAuMjk2ODc2LTcuNjI1LTI2Ljk5NjA5NC0xMS44OTg0MzgtNy43Njk1MzItNC45NjQ4NDQtMTQuODAwNzgyLTkuNDk2MDk0LTIwLjg5ODQzOC0xMy40Njg3NS05Ljc1LTYuMzU1NDY4LTE0LjgwODU5NC04LjUtMjAuMDM1MTU2LTguNS0xMy4zMTI1IDAtMjUuNzUgMi4yNTM5MDYtMzYuOTcyNjU2IDYuNjk5MjE5LTExLjI1NzgxMyA0LjQ1NzAzMS0yMS4wMDM5MDYgMTAuNTc4MTI1LTI4Ljk2ODc1IDE4LjE5OTIxOS03LjYwNTQ2OSA3LjI4MTI1LTE0LjM5MDYyNSAxNi4xMjEwOTQtMjAuMTU2MjUgMjYuMjczNDM3LTUuNTU4NTk0IDkuNzg1MTU3LTEwLjA1ODU5NCAxOS45OTIxODgtMTMuMzcxMDk0IDMwLjMzOTg0NC0zLjE5OTIxOSAxMC4wMDM5MDYtNS44NzUgMjAuOTQ1MzEzLTcuOTUzMTI1IDMyLjUyMzQzNy0yLjA1ODU5NCAxMS40NzY1NjMtMy40NTcwMzEgMjIuMzYzMjgyLTQuMTQ4NDM3IDMyLjM2MzI4Mi0uNjc5Njg4IDkuNzk2ODc1LTEuMDIzNDM4IDE5Ljk2NDg0NC0xLjAyMzQzOCAzMC4yMzQzNzUgMCAyNi43MjY1NjIgOC40OTYwOTQgNDguMzYzMjgxIDI1LjI1IDY0LjMyMDMxMiAxNi41NDY4NzUgMTUuNzQ2MDk0IDM4LjQ0MTQwNiAyMy43MzQzNzUgNjUuMDY2NDA2IDIzLjczNDM3NWgyNDYuNTMxMjVjMjYuNjI1IDAgNDguNTExNzE5LTcuOTg0Mzc1IDY1LjA2MjUtMjMuNzM0Mzc1IDE2Ljc1NzgxMy0xNS45NDUzMTIgMjUuMjUzOTA2LTM3LjU4NTkzNyAyNS4yNTM5MDYtNjQuMzI0MjE5LS4wMDM5MDYtMTAuMzE2NDA2LS4zNTE1NjItMjAuNDkyMTg3LTEuMDM1MTU2LTMwLjI0MjE4N3ptMCAwIi8+PC9zdmc+" />
                                })} */}
                            </p>
                        </header>
                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="#">
                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                {/* <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" /> */}
                                <p className="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span className="hidden">♥</span>
                                <i className="fa fa-heart"></i>
                            </a>
                        </footer>
                    </article>
                </div>
            )
        })
    )
}

export default Card;