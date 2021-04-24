import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import Card from '../../components/Card';
import Hotel from "../../components/FakeData/Hotels.json";

function RoomManagement() {
    useEffect(() => {
        document.title = `VIBO | Room management`;
    }, []);

    const history = useHistory();
    const handleRoomEditClick = (room) => {
        const editPhotoUrl = `/admin/room/${room.id}`;
        console.log('Edit: ', editPhotoUrl);
        history.push(editPhotoUrl);
    }

    const handleRoomRemoveClick = (room) => {
        console.log('Edit: ', room);
        // const editPhotoUrl = `/admin/room/${room.id}`;
        // console.log(editPhotoUrl);
        // history.push(editPhotoUrl);
    }

    return (
        <>
            { Hotel.map((room, index) => {
                return <Card room={room} key={index}
                    onEditClick={handleRoomEditClick}
                    onRemoveClick={handleRoomRemoveClick}
                />
            })}
        </>
    )
}

export default RoomManagement;
