import React from "react";

import { useHistory } from "react-router-dom";
import StaticHeader from "./StaticHeader";
import Footer from "./Footer";

function RedirectPage(props) {
    let history = useHistory();
    setTimeout(() => {
        history.push("/");
    }, 3000);

    return (
        <>
            <StaticHeader />
            <div className="min-h-screen flex justify-center items-center uppercase text-7xl">
                {props.location.state ? props.location.state.message : "Error: 404 Not Found"}
            </div>
            <Footer />
        </>
    );
}

export default RedirectPage;
