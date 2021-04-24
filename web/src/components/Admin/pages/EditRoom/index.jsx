import React, { useEffect } from 'react';
import RoomEditForm from "../../components/RoomEditForm/index.jsx"


function EditRoom() {
    console.log('123');
    useEffect(() => {
        document.title = `Edit room information`;
    })

    return (
        <RoomEditForm />
    )
}

export default EditRoom;