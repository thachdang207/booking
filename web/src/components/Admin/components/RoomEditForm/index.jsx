import React, { useState } from "react";
import { FormGroup, Spinner, Button, Modal, ModalBody, ModalFooter } from "reactstrap"
import PropTypes from "prop-types";
import { Formik, FastField, Form } from "formik";
import InputField from "../../../../custom-fields/InputField";
import Title from "../../../Global/Title";
import { Loading } from "../../../Global/Loading";
import { useSelector } from "react-redux";
import { nullOrNot } from "../../../../constants/function";
import { CreateOutline } from "react-ionicons"

RoomEditForm.defaultProps = {
    onSubmit: null,
    room: null,
}

RoomEditForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    room: PropTypes.object.isRequired,
}

function RoomEditForm(props) {
    const state = useSelector((state) => state);
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);

    return (
        <Formik
            initialValues={props.room}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, isSubmitting } = formikProps;
                return (
                    <div>
                        <CreateOutline onClick={toggleShow} cssClasses="cursor-pointer mx-auto" />
                        <Modal
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            isOpen={show} toggle={toggleShow}
                        >
                            {state.admin.loading && <Loading />}
                            <ModalBody>
                                <Title title="Update room information" className="w-full" />
                                <div className="w-full xl:px-16 lg:px-12 md:px-4 sm:px-1 items-center bg-white">
                                    <div className="w-full xl:px-4 lg:px-5 md:px-1 items-center bg-white">
                                        <div className="container mx-auto">
                                            <Form className="max-w-full mx-auto px-12 py-4">
                                                <div className="flex flex-col w-full">
                                                    <FastField
                                                        name="name"
                                                        component={InputField}
                                                        placeholder="Name"
                                                        label="Name"
                                                        value={values.name ? values.name : ""}
                                                    />
                                                    <FastField
                                                        name="price"
                                                        label="Price"
                                                        component={InputField}
                                                        placeholder="Price"
                                                        value={values.price}
                                                    />
                                                    <FastField
                                                        name="description"
                                                        label="Description"
                                                        component={InputField}
                                                        placeholder="Description"
                                                        type="textarea"
                                                        value={nullOrNot(values.description)}
                                                    />
                                                    <FastField
                                                        name="capacity"
                                                        label="Capacity"
                                                        component={InputField}
                                                        placeholder="Capacity"
                                                        value={values.capacity}
                                                    />
                                                    <FormGroup>
                                                        <Button
                                                            type="submit"
                                                            className="w-full"
                                                            color="primary"
                                                            onClick={toggleShow}
                                                        >
                                                            {isSubmitting && <Spinner size="sm" />}
                                                            Update
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

export default RoomEditForm;
