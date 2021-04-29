import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"
import SecureLS from "secure-ls";

function Logout() {
    let ls = new SecureLS({ encodingType: "aes", isCompression: false });
    const state = useSelector((state) => state);

    useEffect(() => {
        ls.remove("token");
        ls.remove("user_id");
        ls.remove("first_login");
        state.auth.isAuthenticated = false;
        state.auth.token = null;
        state.auth.user_id = null;
        // ls.remove("is_admin");
        return () => {
            ls.remove("token");
            ls.remove("user_id");
            ls.remove("first_login");
            state.auth.isAuthenticated = false;
            state.auth.token = null;
            state.auth.user_id = null;
            // ls.remove("is_admin");
        };
    }, []); // eslint-disable-line

    let history = useHistory();
    setTimeout(() => {
        history.push("/");
    }, 500);
    return <></>;
}

export default Logout;
