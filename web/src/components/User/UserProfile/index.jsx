import React, {useEffect} from "react";
import Footer from "../../Global/Footer";
import StaticHeader from "../../Global/StaticHeader";
import UserSideBar from "./UserSideBar";
import UserProfileMain from "./UserProfileMain";
import ErrorMessage from "../../Global/ErrorMessage";
import SuccessMessage from "../../Global/SuccessMessage";
import {useSelector} from "react-redux";
import {Loading} from "../../Global/Loading";
import {Redirect, Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import UserBooking from "../UserBooking";

function UserProfile(props) {
    const state = useSelector((state) => state);
    const match = useRouteMatch();
    const Error = () => {
        return (
            <h1>
                Page is not found
            </h1>
        )
    }
    let history = useHistory();

    useEffect(() => {
        // eslint-disable-next-line
        if (!state.auth.isAuthenticated) {
            history.push({
                pathname: "/401",
                state: {
                    message:
                        "You are not authorized, you'll be redirected in a bit"
                }
            });
        }
    }, [state.auth.isAuthenticated]); // eslint-disable-line

    return (
        <>
            <StaticHeader/>
            {state.user.loading && <Loading/>}
            {state.user.success === false && (
                <ErrorMessage errors={state.user.errors}/>
            )}
            {state.user.success && <SuccessMessage message="Success"/>}
            <main className="bg-gray-100 min-h-screen flex flex-col md:flex-row md:justify-center p-5 text-gray-800">
                <UserSideBar/>
                <Switch>
                    <Redirect exact from={`${match.url}`} to={`${match.url}/:id/`}/>
                    <Route path={`${match.url}/:id`} exact component={UserProfileMain}/>
                    <Route path={`${match.url}/:id/bookings`} exact component={UserBooking}/>
                    <Route exact component={Error}/>
                </Switch>
            </main>

            <Footer/>
        </>
    );
}

export default UserProfile;
