import React, {useEffect} from 'react';
import {createOwner} from "../../../../redux/actions/sAdmin.action";
import {useDispatch, useSelector} from "react-redux";
import {useSecureLs} from "../../../Global/UseSecureLs";
import CreateOwnerForLocationForm from "./CreateOwnerForLocationForm";
import ErrorMessage from "../../../Global/ErrorMessage";
import {Loading} from "../../../Global/Loading";
import {useHistory, useRouteMatch} from "react-router-dom";

function CreateOwnerForLocation() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const [superAdminToken] = useSecureLs("sAdmin_token")
    const [admin_token, setAdminToken] = useSecureLs("admin_token")// eslint-disable-line
    const [admin_id, setAdminId] = useSecureLs("admin_id")// eslint-disable-line

    const history = useHistory();

    useEffect(() => {
        !state.sAdmin.isAuthenticated
        && history.push("/super-admin/login");
    }, [state.sAdmin.isAuthenticated]); // eslint-disable-line

    useEffect(() => {
        state.sAdmin.errors = null;
    }, [state.sAdmin.errors]);

    useEffect(() => {
        state.sAdmin.success && history.push("/super-admin");
    },[state.sAdmin.success]);

    useEffect(() => {
        document.title = "Create an owner"
    },[])

    const handleCreate = (values) => {
        createOwner(dispatch, superAdminToken, values, setAdminToken, setAdminId)
    }
    return (
        <div>
            {state.sAdmin.loading && <Loading/>}
            {state.sAdmin.errors !== null && (
                <ErrorMessage errors={state.sAdmin.errors}/>
            )}
            <CreateOwnerForLocationForm onSubmit={handleCreate} />
        </div>
    );
}

export default CreateOwnerForLocation;
