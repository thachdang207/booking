import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import {getAdmin} from "../../../../redux/actions/admin.action";
import {useDispatch, useSelector} from "react-redux";
import {useSecureLs} from "../../../Global/UseSecureLs";
import AddRoom from "../AddRoom";
import {Button, Table} from "reactstrap";
import {formatPrice} from "../../../../constants/function";
import {Loading} from "../../../Global/Loading";

function RoomManagement() {
    const state = useSelector((state) => state);
    const [adminToken] = useSecureLs("admin_token")
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() => {
            getAdmin(dispatch, adminToken);
        }, 1000)
        return () => clearTimeout(timer)
    }, []);

    useEffect(() => {
        document.title = `Room management`;
    })

    return (
        <div className="">
            <div className="sm:mx-0 md:mx-2 lg:mx-3 xl:mx-4">
                <Table striped bordered hover>
                    {state.admin.loading && <Loading/>}
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
                                <td className="font-bold">{room.name}</td>
                                <td>{room.capacity}</td>
                                <td>{formatPrice(room.price)} VND</td>
                                <td>
                                    <Link to={`/admin/room/${room.id}`}>
                                        <Button color="primary">
                                            Edit
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link>
                                        <Button color="danger">
                                            Delete
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                    <tr className="uppercase font-semibold text-xl">
                        <AddRoom/>
                        <td> Create a new room </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default RoomManagement;
