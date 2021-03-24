import React from 'react'
import { useHistory } from 'react-router';
import Card from '../../components/Card';
import Hotel from "../../components/FakeData/Hotels.json";
import Pagination from '../../components/Pagination';
// const Pagination = React.lazy(() => import('../Pagination/Pagination'))


function HomeAdmin() {
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

export default HomeAdmin;