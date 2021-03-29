import React , {useEffect} from 'react';
import RoomEditForm from "../../components/RoomEditForm"


function EditRoom() {
    useEffect(() => {
        document.title = `Edit room information`;
    })

    return (
        <RoomEditForm />                           
    )
}

export default EditRoom;