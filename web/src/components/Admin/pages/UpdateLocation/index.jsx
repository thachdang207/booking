import React, {useEffect} from 'react';
import UpdateLocationForm from "./UpdateLocationForm";
import {useDispatch, useSelector} from "react-redux";
import {useSecureLs} from "../../../Global/UseSecureLs";
import {getAdmin, updateLocation} from "../../../../redux/actions/admin.action";
import {useHistory} from "react-router-dom";

function UpdateLocation() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [adminToken] = useSecureLs("admin_token")
    const history = useHistory();

    useEffect(() =>{
       getAdmin(dispatch, adminToken);
    },[])

    useEffect(() => {
        document.title = `Update location`
    });
    
    const handleSubmit = (values) => {
        updateLocation(dispatch, adminToken, values, state.admin.user.location.id);
        history.push("/admin")
    }

    return (
        <div>
            <UpdateLocationForm onSubmit={handleSubmit} location={state.admin.user.location}/>
        </div>
    );
}

export default UpdateLocation;

