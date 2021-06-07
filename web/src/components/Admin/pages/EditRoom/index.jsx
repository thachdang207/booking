import React, { useEffect } from 'react';
import RoomEditForm from "../../components/RoomEditForm"
import {useDispatch} from "react-redux";
import {useSecureLs} from "../../../Global/UseSecureLs";
import {updateRoom} from "../../../../redux/actions/admin.action";


function EditRoom({id, room}) {
    const dispatch = useDispatch();
    const [adminToken] = useSecureLs("admin_token")
    const onSubmitHandler = (values) => {
        updateRoom(dispatch, adminToken, id, values);
        const timer = setTimeout(() => {
            window.location.reload();
        },1000);
        return () => clearTimeout(timer);
    }
    useEffect(() => {
        document.title = `Edit room information`;
    })

    return (
        <RoomEditForm onSubmit={onSubmitHandler} room={room}/>
    )
}

export default EditRoom;
