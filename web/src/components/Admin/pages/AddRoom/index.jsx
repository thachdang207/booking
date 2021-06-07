import React from 'react';
import AddRoomForm from "../../components/AddRoomForm";
import {useDispatch} from "react-redux";
import {useSecureLs} from "../../../Global/UseSecureLs";
import {createRoom} from "../../../../redux/actions/admin.action";

function AddRoom() {
    const dispatch = useDispatch();
    const [adminToken] = useSecureLs("admin_token")
    const onSubmitHandler = (values) => {
        createRoom(dispatch, adminToken, values);
        const timer = setTimeout(() => {
            window.location.reload();
        },1000);
        return () => clearTimeout(timer);
    }

    return (
        <div className="flex justify-center items-center">
            <AddRoomForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

export default AddRoom;
