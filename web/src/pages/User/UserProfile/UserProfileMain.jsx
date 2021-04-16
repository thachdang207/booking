import React, { useEffect } from "react";
import UserPersonalInfo from "./UserPersonalInfo";
import UserPassword from "./UserPassword";
import UserEmail from "./UserEmail";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../redux/actions/user.action";
import { setSuccess } from "../../../redux/actions/commonActions";
import { useParams } from "react-router-dom";

function UserProfileMain() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let { id } = useParams();

    useEffect(() => {
        getUser(dispatch, state.auth.token);
        document.title = `Profile`;
    }, []); // eslint-disable-line

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess(dispatch, null);
        }, 3000);
        return () => clearTimeout(timer);
    }, [state.user.success]); // eslint-disable-line

    return (
        <div className="w-full md:w-6/12 xl:w-8/12 md:ml-5 bg-gray-200 p-5 rounded-sm ">
            {state.user && (
                <>
                    <UserPersonalInfo user={state.user.user} id={id} />
                    <UserEmail id={id} />
                    <UserPassword id={id} />
                </>
            )}
        </div>
    );
}

export default UserProfileMain;
