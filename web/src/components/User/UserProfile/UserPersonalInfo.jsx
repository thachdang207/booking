import React, { useEffect, useState } from "react";
import { Modal, ModalFooter, ModalBody, FormGroup, Spinner, Button, Input, Label } from "reactstrap"
import PropTypes from "prop-types";
import { Formik, FastField, Form } from "formik";
import InputField from "../../../custom-fields/InputField";
import Title from "../../Global/Title";
import SelectField from "../../../custom-fields/SelectField";
import { CITY_OPTIONS } from "../../../constants/global";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../../../redux/actions/city.action";
import { Loading } from "../../Global/Loading";
import { nullOrNot, getExtension } from "../../../constants/function";
import { signUrl, confirmUpload } from "../../../redux/actions/upload.action";
import { useSecureLs } from "../../Global/UseSecureLs"

UserPersonalInfo.defaultProps = {
    onSubmit: null,
    user: null,
}

UserPersonalInfo.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
}

function UserPersonalInfo(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [token] = useSecureLs("token")

    const defaultImage =
        props.user.avatar
            ? props.user.avatar
            : "http://placehold.it/300x300?text=avatar";
    const [image, setImage] = useState(defaultImage)
    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState(null);
    const fileData = {
        fileName: fileName,
        type: getExtension(fileName)
    }

    useEffect(() => {
        getCities(dispatch);
    }, []); // eslint-disable-line

    const onUploadHandler = (e) => {
        e.preventDefault();
        signUrl(dispatch, fileData, token);
    }

    const onChangeImage = (e) => {
        setFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
        setFileName(e.target.value);
    }

    const initialValues = {
        avatar: props.user.avatar,
        fullName: props.user.fullName,
        phoneNumber: props.user.phoneNumber,
        address: props.user.address,
        cityId: 1,
    }


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, setValues, isSubmitting } = formikProps;
                console.log(values);
                const onClickHandler = () => {
                    setValues({
                        ...values,
                        cityId: state.city.cities[values.cityId - 1].id,
                        avatar: state.upload.fileData ? state.upload.fileData.fileUrl : fileName
                    });
                    let uploadUrl = state.upload.fileData ? state.upload.fileData.uploadUrl : "";
                    console.log(uploadUrl, file);
                    confirmUpload(dispatch, uploadUrl, file);
                    const timer = setTimeout(() => {
                        toggle()
                    },1000)
                    return () => clearTimeout(timer)
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
                            {state.user.loading && <Loading />}
                            <ModalBody>
                                <div className="mx-auto">
                                    <Title title="Update personal information" />
                                </div>
                                <hr />
                                <div className="w-full xl:px-20 lg:px-16 md:px-3 sm:px-0 items-center bg-white">
                                    <div className="w-full xl:px-4 lg:px-5 md:px-1 items-center bg-white">
                                        <div className="container mx-auto">
                                            <Form className="max-w-full mx-auto px-16 py-10">
                                                <div className="flex flex-col w-full">
                                                    <div className="relative flex items-center justify-between mb-5">
                                                        <img
                                                            src={
                                                                image ? image : defaultImage
                                                            }
                                                            alt="avatar"
                                                            className="w-40 h-40 rounded-full object-cover mr-4"
                                                        />
                                                        <div>
                                                            <Label>Select image:</Label>
                                                            <Input
                                                                type="file"
                                                                name="img"
                                                                id="avatar"
                                                                accept="image/*"
                                                                onChange={(e) =>
                                                                    onChangeImage(e)
                                                                } />
                                                            <Button type="button" onClick={onUploadHandler} className="mt-3">
                                                                Upload
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <FastField
                                                        name="fullName"
                                                        component={InputField}
                                                        placeholder="Name"
                                                        value={values.fullName}
                                                    />
                                                    <FastField
                                                        name="address"
                                                        component={InputField}
                                                        placeholder="Address"
                                                        value={values.address}
                                                    />
                                                    <FastField
                                                        name="phoneNumber"
                                                        component={InputField}
                                                        placeholder="Phone Number"
                                                        value={nullOrNot(values.phoneNumber)}
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
