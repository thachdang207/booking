import React, { useEffect } from 'react';
import RoomEditForm from "../../components/RoomEditForm"
import {useDispatch} from "react-redux";
import {useSecureLs} from "../../../Global/UseSecureLs";
import {useParams} from "react-router-dom";
import {updateRoom} from "../../../../redux/actions/admin.action";


function EditRoom() {
    const dispatch = useDispatch();
    const [adminToken] = useSecureLs("admin_token")
    const {id} = useParams();
    const onSubmitHandler = (values) => {
        updateRoom(dispatch, adminToken, id, values);
        console.log(values);
        const timer = setTimeout(() => {
            window.location.reload()
        },1000);
        return () => clearTimeout(timer);
    }
    useEffect(() => {
        document.title = `Edit room information`;
    })

    return (
        <RoomEditForm onSubmit={onSubmitHandler}/>
    )
}

export default EditRoom;
