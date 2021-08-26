/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import UserPersonalInfo from "./UserPersonalInfo";
import { useSelector, useDispatch } from "react-redux";
import { getUser, updateUserInfo } from "../../../redux/actions/user.action";
import { setSuccess } from "../../../redux/actions/commonActions";
import { getCities } from "../../../redux/actions/city.action";
import { useSecureLs } from "../../Global/UseSecureLs";
import { MailOutline, HomeOutline, CallOutline, BusinessOutline, Toggle } from 'react-ionicons'
import "./UserProfile.css"

function UserProfileMain() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const updatedUserInfo = useSelector((state) => state.user.updatedUser)

    const [popupImage, setPopupImage] = useState(false);
    const togglePopupImage = () => setPopupImage(!popupImage)

    const [token] = useSecureLs("token")

    useEffect(() => {
        const timer = setTimeout(() => {
            getCities(dispatch);
            getUser(dispatch, token);
        }, 1000);
        return () => clearTimeout(timer);
    }, [updatedUserInfo]); // eslint-disable-line

    useEffect(() => {
        document.title = `Profile`;
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess(dispatch, null);
        }, 1000);
        return () => clearTimeout(timer);
    }, [state.user.success]); // eslint-disable-line

    const onSubmitHandler = (values) => {
        console.log(values);
        updateUserInfo(dispatch, token, values);
    };

    return (
        <div className="relative w-full h-full bg-gray-200 py-4">
            {state.user.user && (
                <div className="popup__image" style={{ "display": popupImage ? "block" : "none" }}>
                    <span
                        className="close"
                        onClick={togglePopupImage}
                    >&times;</span>
                    <img
                        className="popup__image-content"
                        src={
                            state.user.user.avatar
                                ? state.user.user.avatar
                                : "https://source.unsplash.com/random"
                        }
                        alt="avatar"
                    />
                </div>
            )}
            <div className="py-20 md:px-20 lg:px-32 xl:px-40 2xl:px-96 rounded-xl">
                <div className="px-12 md:px-20 lg:px-32 xl:px-40 2xl:px-64 transform">
                    <div
                        className="bg-gray-100 h-auto rounded-xl overflow-hidden shadow-lg mt-0"
                    >
                        {state.user.user && (
                            <div>
                                <div className="relative">
                                    <img
                                        src={
                                            state.user.user.avatar
                                                ? state.user.user.avatar
                                                : "https://source.unsplash.com/random"
                                        }
                                        alt="avatar"
                                        className="w-full h-96 object-cover shadow-md transition hover:opacity-80 cursor-pointer"
                                        onClick={togglePopupImage}
                                    />
                                </div>
                                <UserPersonalInfo onSubmit={onSubmitHandler} user={state.user.user} />
                                <div className="py-10 sm:px-2 md:px-10 lg:px-24">
                                    <h1 className="my-4 font-sans text-center font-bold">
                                        {state.user.user.fullName}
                                    </h1>
                                    <p className="flex items-center ">
                                        <MailOutline
                                            color={"#4338CA"}
                                            height="30px"
                                            width="30px"
                                        />
                                        <span className="font-semibold mt-2 ml-2">
                                            Email: <small className="font-medium ml-1 text-lg">
                                                {state.user.user.email}
                                            </small>
                                        </span>
                                    </p>
                                    <p className="flex items-center mt-2">
                                        <HomeOutline
                                            color={"#4338CA"}
                                            height="30px"
                                            width="30px"
                                        />
                                        <span className="font-semibold mt-2 ml-2">
                                            Address: <small className="font-medium ml-1 text-lg">
                                                {state.user.user.address}
                                            </small>
                                        </span>
                                    </p>
                                    <p className="flex items-center mt-2">
                                        <BusinessOutline
                                            color={"#4338CA"}
                                            height="30px"
                                            width="30px"
                                        />
                                        <span className="font-semibold mt-2 ml-2">
                                            City: <small className="font-medium ml-1 text-lg">
                                                {state.user.user.city}
                                            </small>
                                        </span>
                                    </p>
                                    <p className="flex items-center mt-2">
                                        <CallOutline
                                            color={"#4338CA"}
                                            height="30px"
                                            width="30px"
                                        />
                                        <span className="font-semibold mt-2 ml-2">
                                            Phone number: <small className="font-medium ml-1 text-lg">
                                                {state.user.user.phoneNumber}
                                            </small>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </div>
    );
}

export default UserProfileMain;
