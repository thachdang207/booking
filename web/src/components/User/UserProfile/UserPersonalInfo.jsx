import React, {useEffect, useState} from "react";
import {Modal, ModalFooter, ModalBody, ModalHeader, FormGroup, Spinner, Button} from "reactstrap"
import PropTypes from "prop-types";
import {Formik, FastField, Form} from "formik";
import InputField from "../../../custom-fields/InputField";
import Title from "../../Global/Title";
import SelectField from "../../../custom-fields/SelectField";
import {CITY_OPTIONS} from "../../../constants/global";
import {useDispatch, useSelector} from "react-redux";
import {getCities} from "../../../redux/actions/city.action";
import {Loading} from "../../Global/Loading";

UserPersonalInfo.defaultProps = {
    onSubmit: null,
}

UserPersonalInfo.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

function UserPersonalInfo(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        getCities(dispatch);
    }, []); // eslint-disable-line

    const initialValues = {
        avatar: "",
        fullName: "",
        phoneNumber: "",
        address: "",
        cityId: null,
    }


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const {values, setValues, isSubmitting} = formikProps;
                const onClickHandler = () => {
                    setValues({
                        ...values,
                        cityId: state.city.cities[values.cityId - 1].id,
                    })
                }
                return (
                    <div>
                        <Button onClick={toggle} color="primary">Change Personal Information</Button>
                        <Modal
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            isOpen={modal} toggle={toggle}
                        >
                            {state.user.loading && <Loading/>}
                            <ModalHeader>
                                <Title title="Update personal information"/>
                            </ModalHeader>
                            <ModalBody>
                                <div className="w-full xl:px-20 lg:px-16 md:px-3 sm:px-0 items-center bg-white">
                                    <div className="w-full xl:px-4 lg:px-5 md:px-1 items-center bg-white">
                                        <div className="container mx-auto">
                                            <Form className="max-w-full mx-auto bg-gray-200 p-16 rounded-md shadow-sm">
                                                <div className="flex flex-col w-full">
                                                    <FastField
                                                        name="fullName"
                                                        component={InputField}
                                                        placeholder="Name"
                                                    />
                                                    <FastField
                                                        name="address"
                                                        component={InputField}
                                                        placeholder="Address"
                                                    />
                                                    <FastField
                                                        name="phoneNumber"
                                                        component={InputField}
                                                        placeholder="Phone Number"
                                                    />
                                                    <FastField
                                                        name="cityId"
                                                        component={SelectField}
                                                        placeholder="City"
                                                        options={CITY_OPTIONS}
                                                    />
                                                    <FormGroup>
                                                        <Button
                                                            type="submit"
                                                            className="w-full"
                                                            color="primary"
                                                            onClick={onClickHandler}
                                                        >
                                                            {isSubmitting && <Spinner size="sm"/>}
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
                                <Button onClick={toggle}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                )
            }}
        </Formik>
    );
}

export default UserPersonalInfo;
