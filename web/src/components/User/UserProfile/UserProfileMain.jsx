/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import UserPersonalInfo from "./UserPersonalInfo";
import {useSelector, useDispatch} from "react-redux";
import {getUser, updateUserInfo} from "../../../redux/actions/user.action";
import {setSuccess} from "../../../redux/actions/commonActions";
import {getCities} from "../../../redux/actions/city.action";

function UserProfileMain() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        const timer = setTimeout(() => {
            getCities(dispatch);
            getUser(dispatch, state.auth.token);
            document.title = `Profile`;
        }, 3000);
        return () => clearTimeout(timer);
    }, []); // eslint-disable-line

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess(dispatch, null);
        }, 3000);
        return () => clearTimeout(timer);
    }, [state.user.success]); // eslint-disable-line

    const onSubmitHandler = (values) => {
        updateUserInfo(dispatch, state.auth.token, values);
        const timer = setTimeout(() => {
            window.location.reload();
        }, 3000);
        return () => clearTimeout(timer);
    };

    return (
        <div className="w-full md:w-9/12 xl:w-10/12 md:ml-5 bg-gray-200 p-5 rounded-sm ">
            {state.user.user && (
                <div className="relative px-auto">
                    <img
                        src={
                            state.user.user.image
                                ? state.user.user.image
                                : "http://placehold.it/300x300?text=avatar"
                        }
                        alt="avatar"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <h1>{state.user.user.fullName}</h1>
                    <p>{state.user.user.email}</p>
                    <p>{state.user.user.address}</p>
                    <p>{state.user.user.city}</p>
                    <p>{state.user.user.phoneNumber}</p>

                    <UserPersonalInfo onSubmit={onSubmitHandler}/>
                </div>
            )}
        </div>
    );
}

export default UserProfileMain;
