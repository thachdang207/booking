import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const SuperAdminProtectedRoute = ({ component: Component, ...rest }) => {
    const state = useSelector((state) => state);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (state.sAdmin.isAuthenticated) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/super-admin-login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};
