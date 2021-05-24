import React, {useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom';
import {getAdmin} from "../../../../redux/actions/admin.action";
import {useDispatch, useSelector} from "react-redux";
import {useSecureLs} from "../../../Global/UseSecureLs";
import AddRoom from "../AddRoom";
import {Button, Table} from "reactstrap";
import {formatPrice} from "../../../../constants/function";

function RoomManagement() {
    const state = useSelector((state) => state);
    const [adminToken] = useSecureLs("admin_token")
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() => {
            getAdmin(dispatch, adminToken);
            document.title = `VIBO | Room management`;
        }, 1000)
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
        <div className="">
            <div className="sm:mx-0 md:mx-2 lg:mx-3 xl:mx-4">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Room name</th>
                        <th>Capacity</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {state.admin && state.admin.user.location.rooms.map((room, key) => {
                        return (
                            <tr key={key}>
                                <td className="w-3">
                                    {key + 1}
                                </td>
                                <th>{room.name}</th>
                                <td>{room.capacity}</td>
                                <td>{formatPrice(room.price)} VND</td>
                                <td>
                                    <Button color="primary" onClick={handleRoomEditClick}>
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button color="danger" onClick={handleRoomRemoveClick}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                    <AddRoom/>
                    <th className="uppercase font-semibold text-xl">
                        Create a new room
                    </th>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default RoomManagement;
