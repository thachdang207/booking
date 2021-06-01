import React, {useState} from "react";
import {Modal, ModalFooter, ModalBody, FormGroup, Spinner, Button} from "reactstrap"
import PropTypes from "prop-types";
import {Formik, FastField, Form} from "formik";
import InputField from "../../../../custom-fields/InputField";
import Title from "../../../Global/Title";
import SelectField from "../../../../custom-fields/SelectField";
import {GUEST_OPTIONS} from "../../../../constants/global";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import {Loading} from "../../../Global/Loading";
import {useSelector} from "react-redux";

AddRoomForm.defaultProps = {
    onSubmit: null,
}

AddRoomForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

function AddRoomForm(props) {
    const state = useSelector((state) => state);
    const initialValues = {
        price: '',
        name: '',
        capacity: '',
        description: '',
    }
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required').nullable(),
        price: Yup.string().required('Price is required').nullable(),
        capacity: Yup.string().required('Max guests is required').nullable(),
    })


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const {values, isSubmitting} = formikProps;
                console.log(values);
                return (
                    <div>
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
                        <Modal
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            isOpen={show} toggle={toggleShow}
                        >
                            {state.admin.loading && <Loading />}
                            <Title title="Create a new room" className="w-full"/>
                            <hr/>
                            <ModalBody>
                                <div className="w-full xl:px-20 lg:px-16 md:px-3 sm:px-0 items-center bg-white">
                                    <div className="w-full xl:px-4 lg:px-5 md:px-1 items-center bg-white">
                                        <div className="container mx-auto">
                                            <Form className="max-w-full mx-auto p-16">
                                                <div className="flex flex-col w-full">
                                                    <FastField
                                                        name="name"
                                                        component={InputField}
                                                        placeholder="Name"
                                                    />
                                                    <FastField
                                                        name="price"
                                                        component={InputField}
                                                        placeholder="Price"
                                                    />
                                                    <FastField
                                                        name="description"
                                                        component={InputField}
                                                        placeholder="Description"
                                                    />
                                                    <FastField
                                                        name="capacity"
                                                        component={SelectField}
                                                        placeholder="Capacity"
                                                        options={GUEST_OPTIONS}
                                                    />
                                                    <FormGroup>
                                                        <Button
                                                            type="submit"
                                                            className="w-full"
                                                            color="primary"
                                                            onClick={toggleShow}
                                                        >
                                                            {isSubmitting && <Spinner size="sm"/>}
                                                            Create
                                                        </Button>
                                                    </FormGroup>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={toggleShow}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                )
            }}
        </Formik>
    );
}

export default AddRoomForm;
