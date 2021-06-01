import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setSuccess} from "../../../../redux/actions/commonActions";
import {getAdmin} from "../../../../redux/actions/admin.action";
import AdminInfo from "../../components/AdminInfo";
import LocationInfo from "../../components/LocationInfo";
import {useSecureLs} from "../../../Global/UseSecureLs";
import {Loading} from "../../../Global/Loading";
// import {useHistory} from "react-router-dom";

function HomeAdmin() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [adminToken] = useSecureLs("admin_token")

    useEffect(() => {
        const timer = setTimeout(() => {
            getAdmin(dispatch, adminToken);
            document.title = `Profile`;
        }, 1000);
        return () => clearTimeout(timer);
    }, []); // eslint-disable-line

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess(dispatch, null);
        }, 1000);
        return () => clearTimeout(timer);
    }, [state.admin.success]); // eslint-disable-line

    // const history = useHistory();
    // useEffect(() => {
    //     !state.auth.isAuthenticated && history.push("/login");
    // }, [state.auth.isAuthenticated]);

    return (
        <>
            {state.admin.loading && <Loading />}
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
