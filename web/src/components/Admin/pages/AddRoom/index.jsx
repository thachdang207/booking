import React, {useEffect, useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {useHistory} from "react-router-dom";

function AddRoom() {
    const initialValues = {
        price: '',
        name: '',
        capacity: '',
        description: '',
    }
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [show, setShow] = useState(false);
    const [room, setRoom] = useState(initialValues)
    const toggleShow = () => setShow(!show);

    const history = useHistory();
    const onSubmitAdd = () => {
        if (state.auth.isAuthenticated) {
            setTimeout(() => {
                toggleShow();
            }, 3000)
        } else history.push("/login");
    }

    return (
        <div className="flex justify-center items-center">
            <FontAwesomeIcon
                icon={faPlusCircle}
                style={{
                    width: "50%",
                    height: "50%",
                    cursor: "pointer",
                    margin: "10px"
                }}
                onClick={toggleShow}
            />
            <Modal isOpen={show} toggle={toggleShow} centered size="lg">
                <ModalHeader className="font-bold">
                </ModalHeader>
                <ModalBody className="text-2xl">
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onSubmitAdd}>Add</Button>
                    <Button onClick={toggleShow}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default AddRoom;
