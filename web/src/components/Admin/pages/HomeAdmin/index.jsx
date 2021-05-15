import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setSuccess} from "../../../../redux/actions/commonActions";
import {getAdmin} from "../../../../redux/actions/admin.action";
import AdminInfo from "../../components/AdminInfo";
import LocationInfo from "../../components/LocationInfo";

function HomeAdmin() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        const timer = setTimeout(() => {
            getAdmin(dispatch, state.auth.token);
            document.title = `Profile`;
        }, 3000);
        return () => clearTimeout(timer);
    }, []); // eslint-disable-line

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess(dispatch, null);
        }, 3000);
        return () => clearTimeout(timer);
    }, [state.admin.success]); // eslint-disable-line

    return (
        <>
            {state.admin.user && (
                <div className="flex flex-row w-full">
                    <AdminInfo user={state.admin.user} />
                    <LocationInfo location={state.admin.user.location} />
                </div>
            )}
        </>
    )
}

export default HomeAdmin;
