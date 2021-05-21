import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import Card from '../../components/Card';
import {getAdmin} from "../../../../redux/actions/admin.action";
import {useDispatch, useSelector} from "react-redux";
import {useSecureLs} from "../../../Global/UseSecureLs";
import AddRoom from "../AddRoom";

function RoomManagement() {
    const state = useSelector((state) => state);
    const [adminToken] = useSecureLs("admin_token")
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() => {
            getAdmin(dispatch, adminToken);
            document.title = `VIBO | Room management`;
        },1000)
        return () => clearTimeout(timer)
    }, []);

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
        <div className="flex flex-wrap">
            {state.admin && state.admin.user.location.rooms.map((room, index) => {
                return <Card room={room} key={index}
                             onEditClick={handleRoomEditClick}
                             onRemoveClick={handleRoomRemoveClick}
                />
            })}
            <AddRoom/>
        </div>
    )
}

export default RoomManagement;
