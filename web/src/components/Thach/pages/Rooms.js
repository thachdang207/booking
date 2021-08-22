import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useSecureLs } from "../../Global/UseSecureLs"
import { getAdmin } from "../../../redux/actions/admin.action"
import Card from "../components/Card"

function Rooms(props) {
    const state = useSelector((state) => state);
    const [adminToken] = useSecureLs("admin_token")
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() => {
            getAdmin(dispatch, adminToken);
        }, 1000)
        return () => clearTimeout(timer)
    }, []);
    return (
        <div>
                <Card rooms={state.admin.user && state.admin.user.location.rooms}/>
        </div>
    );
}

export default Rooms;