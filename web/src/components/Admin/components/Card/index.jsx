/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import PropTypes from 'prop-types';

Card.propTypes = {
    room: PropTypes.object,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func
}
Card.defaultProps = {
    room: {},
    onEditClick: null,
    onRemoveClick: null
}

function Card(props) {
    const [hoverCard, setHoverCard] = useState(0);
    const {room, onEditClick, onRemoveClick} = props;

    const handleEditClick = () => {
        if (onEditClick) onEditClick(room);
    }
    const handleRemoveClick = () => {
        if (onRemoveClick) onRemoveClick(room);
    }
    return (
        <div
            className="my-10 px-10 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform hover:-translate-y-1 hover:scale-110"
            onMouseOver={() => setHoverCard(room.id)}
            onMouseLeave={() => setHoverCard(0)}
            key={room.id}
        >
            <article className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative flex justify-center items-center">
                    <a href="#">
                        <img alt="room" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                    </a>
                    <div className={"absolute " + (hoverCard === room.id ? `opacity-100` : `opacity-0`)}>
                        <button className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full "
                                onClick={handleRemoveClick}>
                            Delete
                        </button>
                        <button
                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={handleEditClick}>
                            Edit
                        </button>
                    </div>
                </div>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:no-underline text-black" href="#">
                            {room.name}
                        </a>
                    </h1>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="text-grey-darker text-sm flex mr-5">
                        {room.capacity} người
                    </p>
                    <a className="flex items-center no-underline hover:no-underline ml-2 text-sm" href="#">
                        <div className={room.status ? '' : 'text-black'}>
                            {room.status ? <p>Available</p> : <p>Not available</p>}
                        </div>
                    </a>
                </footer>
            </article>
        </div>
    )
}

export default Card;
