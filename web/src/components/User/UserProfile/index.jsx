import React from "react";
import Footer from "../../Global/Footer";
import StaticHeader from "../../Global/StaticHeader";
import UserSiderBar from "../UserSiderBar";
import UserProfileMain from "./UserProfileMain";
import ErrorMessage from "../../Global/ErrorMessage";
import SuccessMessage from "../../Global/SuccessMessage";
import { useSelector } from "react-redux";
import { Loading } from "../../Global/Loading";

function UserProfile(props) {
    const state = useSelector((state) => state);

    return (
        <>
            <StaticHeader />
            {state.user.loading && <Loading />}
            {state.user.success === false && (
                <ErrorMessage errors={state.user.errors} />
            )}
            {state.user.success && <SuccessMessage message="Success" />}
            <main className="bg-gray-100 min-h-screen flex flex-col md:flex-row md:justify-center p-5 text-gray-800">
                <UserSiderBar />
                <UserProfileMain />
            </main>

            <Footer />
        </>
    );
}

export default UserProfile;
