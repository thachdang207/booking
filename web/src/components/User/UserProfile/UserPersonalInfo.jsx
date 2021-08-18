import React, { useEffect, useState } from "react";
import { Modal, ModalFooter, ModalBody, FormGroup, Button, Input, Label } from "reactstrap"
import PropTypes from "prop-types";
import { Formik, FastField, Form } from "formik";
import InputField from "../../../custom-fields/InputField";
import Title from "../../Global/Title";
import SelectField from "../../../custom-fields/SelectField";
import { CITY_OPTIONS } from "../../../constants/global";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../../../redux/actions/city.action";
import { Loading } from "../../Global/Loading";
import { nullOrNot, getExtension, findValue } from "../../../constants/function";
import { signUrl, confirmUpload } from "../../../redux/actions/upload.action";
import { useSecureLs } from "../../Global/UseSecureLs"
import { SettingsSharp } from "react-ionicons"
import PhoneInputField from "../../../custom-fields/PhoneInputField";

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
            : "https://source.unsplash.com/random";
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

    const handleUpload = async ({ signedRequest, uploadFile }) => {
        try {
            const data = await confirmUpload({
                dispatch: dispatch,
                signedRequest: signedRequest,
                uploadFile: uploadFile
            })
            console.log(data);
        } catch (e) {
            console.log(e)
        }
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
        cityId: props.user.city ? findValue(CITY_OPTIONS, props.user.city) : "Đà Nẵng",
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, setValues } = formikProps;
                console.log(values);
                const onClickHandler = () => {
                    setValues({
                        ...values,
                        avatar: state.upload.fileData ? state.upload.fileData.fileUrl : fileName
                    });
                    if (file) {
                        let signedRequest = state.upload.fileData ? state.upload.fileData.uploadUrl : "";
                        handleUpload({
                            signedRequest: signedRequest,
                            uploadFile: file
                        })
                    }
                    const timer = setTimeout(() => {
                        toggle()
                    }, 1000)
                    return () => clearTimeout(timer)
                }

                return (
                    <div>
                        <button
                            onClick={toggle}
                            className="absolute w-20 h-20 -mt-10 bg-gray-200 inset-x-0 mx-auto border-none rounded-full transform hover:rotate-90">
                            <SettingsSharp
                                color={"#0275d8"}
                                width="full"
                                height="full"
                                cssClasses="p-3"
                            />
                        </button>
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
                                                            className="w-32 h-32 rounded-full object-cover mr-4"
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
                                                        component={PhoneInputField}
                                                        value={nullOrNot(values.phoneNumber)}
                                                    />
                                                    <FastField
                                                        name="cityId"
                                                        component={SelectField}
                                                        placeholder="City"
                                                        options={CITY_OPTIONS}
                                                        defaultValue={{
                                                            value: values.cityId,
                                                            label: props.user.city
                                                        }}
                                                    />
                                                    <FormGroup>
                                                        <Button
                                                            type="submit"
                                                            className="w-full"
                                                            color="primary"
                                                            onClick={onClickHandler}
                                                        >
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
