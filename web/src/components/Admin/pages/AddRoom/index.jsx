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
        console.log(values);
    }

    return (
        <div className="flex justify-center items-center">
            <AddRoomForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

export default AddRoom;
