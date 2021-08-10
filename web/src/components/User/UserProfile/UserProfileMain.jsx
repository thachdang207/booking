/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import UserPersonalInfo from "./UserPersonalInfo";
import { useSelector, useDispatch } from "react-redux";
import { getUser, updateUserInfo } from "../../../redux/actions/user.action";
import { setSuccess } from "../../../redux/actions/commonActions";
import { getCities } from "../../../redux/actions/city.action";
import { useSecureLs } from "../../Global/UseSecureLs";
import { MailOutline, HomeOutline, CallOutline, BusinessOutline } from 'react-ionicons'

function UserProfileMain() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [token] = useSecureLs("token")

    useEffect(() => {
        const timer = setTimeout(() => {
            getCities(dispatch);
            getUser(dispatch, token);
        }, 1000);
        return () => clearTimeout(timer);
    }, []); // eslint-disable-line

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
        updateUserInfo(dispatch, token, values);

        const timer = setTimeout(() => {
            window.location.reload();
        }, 2000);
        return () => clearTimeout(timer);
    };

    return (
        <div className="w-full md:w-8/12 xl:w-9/12 md:ml-5 bg-gray-200 p-5 rounded-sm ">
            {state.user.user && (
                <div className="relative mx-auto p-4">
                    <img
                        src={
                            state.user.user.image
                                ? state.user.user.image
                                : "http://placehold.it/300x300?text=avatar"
                        }
                        alt="avatar"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <div className="text-xl">
                        <h1 className="my-4 font-sans">
                            {state.user.user.fullName}
                        </h1>
                        <p className="flex items-center">
                            <MailOutline
                                color={'#00000'}
                                height="30px"
                                width="30px"
                            />
                            <span className="font-semibold mt-2 ml-2">
                                Email: <small className="font-medium ml-1">
                                    {state.user.user.email}
                                </small>
                            </span>
                        </p>
                        <p className="flex items-center">
                            <HomeOutline
                                color={'#00000'}
                                height="30px"
                                width="30px"
                            />
                            <span className="font-semibold mt-2 ml-2">
                                Address: <small className="font-medium ml-1">
                                    {state.user.user.address}
                                </small>
                            </span>
                        </p>
                        <p className="flex items-center">
                            <BusinessOutline
                                color={'#00000'}
                                height="30px"
                                width="30px"
                            />
                            <span className="font-semibold mt-2 ml-2">
                                City: <small className="font-medium ml-1">
                                    {state.user.user.city}
                                </small>
                            </span>
                        </p>
                        <p className="flex items-center">
                            <CallOutline
                                color={'#00000'}
                                height="30px"
                                width="30px"
                            />
                            <span className="font-semibold mt-2 ml-2">
                                Phone number: <small className="font-medium ml-1">
                                    {state.user.user.phoneNumber}
                                </small>
                            </span>
                        </p>
                    </div>

                    <UserPersonalInfo onSubmit={onSubmitHandler} user={state.user.user} />
                </div>
            )}
        </div>
    );
}

export default UserProfileMain;
