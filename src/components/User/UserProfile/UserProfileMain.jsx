/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import UserPersonalInfo from "./UserPersonalInfo";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../redux/actions/user.action";
import { Button } from "reactstrap"
import { setSuccess } from "../../../redux/actions/commonActions";
import { useParams } from "react-router-dom";

function UserProfileMain() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let { id } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const handleModalShow = () => {
        setModalShow(true);
    }

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
                    <Button variant="primary" onClick={handleModalShow}>
                        Change personal info
                    </Button>

                    <UserPersonalInfo
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            )}
        </div>
    );
}

export default UserProfileMain;
