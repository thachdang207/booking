import React, {useEffect} from 'react';
import Hotels from '../Hotels'
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

function HomeSuperAdmin() {
    const state = useSelector((state) => state);
    const history = useHistory();
    useEffect(() => {
        !state.sAdmin.isAuthenticated
        && history.push("/super-admin/login");
    }, [state.sAdmin.isAuthenticated]); // eslint-disable-line

    useEffect(() => {
        state.sAdmin.success = null;
        state.sAdmin.errors = null;
    }, []);

    return (
        <div>
            <Hotels/>
        </div>
    );
}

export default HomeSuperAdmin;
