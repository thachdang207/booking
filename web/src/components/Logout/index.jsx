import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"
import SecureLS from "secure-ls";

function Logout() {
    let ls = new SecureLS({ encodingType: "aes", isCompression: false });
    const state = useSelector((state) => state);

    useEffect(() => {
        ls.removeAll();
        state.auth.isAuthenticated = false;
        state.auth.token = null;
        state.auth.user_id = null;

        state.sAdmin.isAuthenticated = false;
        state.sAdmin.token = null;
        state.sAdmin.user_id = null;
        return () => {
            ls.removeAll();
            state.auth.isAuthenticated = false;
            state.auth.token = null;
            state.auth.user_id = null;
            state.sAdmin.isAuthenticated = false;
            state.sAdmin.token = null;
            state.sAdmin.user_id = null;
        };
    }, []); // eslint-disable-line

    let history = useHistory();
    setTimeout(() => {
        history.push("/");
    }, 500);
    return <></>;
}

export default Logout;
