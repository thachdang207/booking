import React, {useEffect} from 'react';
import Hotels from '../Hotels'
import {useSelector} from "react-redux";

function HomeSuperAdmin() {
    const state = useSelector((state) => state);
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
