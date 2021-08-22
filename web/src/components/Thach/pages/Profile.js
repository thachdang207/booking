import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useSecureLs } from "../../Global/UseSecureLs"
import { getAdmin } from "../../../redux/actions/admin.action"
import Profile from "../components/Profile"

function AdminProfile(props) {
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
                <Profile admin={state.admin && state.admin}/>
        </div>
    );
}

export default AdminProfile;