import React from 'react'
import { useHistory } from 'react-router';
import Card from '../Components/Card/card';
import Hotel from "../FakeData/Hotels.json";
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
// const Pagination = React.lazy(() => import('../Pagination/Pagination'))


function Home() {
    const history = useHistory();
    const handleRoomEditClick = (room) => {
        console.log('Edit: ', room);
        const editPhotoUrl = `/admin/room/${room.id}`;
        history.push(editPhotoUrl);
    }

    const handleRoomRemoveClick = (room) => {
        console.log('Edit: ', room);
        const editPhotoUrl = `/admin/room/${room.id}`;
        history.push(editPhotoUrl);
    }

    return (
        <>
            { Hotel.map((room, index) => {
                return <Card room={room} key={index}
                    onEditClick = {handleRoomEditClick}
                    onRemoveClick = {handleRoomRemoveClick}
                />
            })}
            <Pagination to={1} end={9} total={11} />
        </>
    )
}

export default Home;