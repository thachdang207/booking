import React from "react";
import Footer from "../../../components/Footer";
import StaticHeader from "../../../components/StaticHeader";
import UserSiderBar from "../UserSiderBar";
import UserProfileMain from "./UserProfileMain";
import ErrorMessage from "../../../components/ErrorMessage";
import SuccessMessage from "../../../components/SuccessMessage";
import { useSelector } from "react-redux";
import { Loading } from "../../../components/Loading";

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
