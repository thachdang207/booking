import React from "react";
import {FormGroup, Spinner, Button} from "reactstrap"
import PropTypes from "prop-types";
import {Formik, FastField, Form} from "formik";
import InputField from "../../../../custom-fields/InputField";
import Title from "../../../Global/Title";
import SelectField from "../../../../custom-fields/SelectField";
import {GUEST_OPTIONS} from "../../../../constants/global";
import {Loading} from "../../../Global/Loading";
import {useSelector} from "react-redux";

RoomEditForm.defaultProps = {
    onSubmit: null,
}

RoomEditForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

function RoomEditForm(props) {
    const state = useSelector((state) => state);
    const initialValues = {
        price: '',
        name: '',
        capacity: '',
        description: '',
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const {values, isSubmitting} = formikProps;
                console.log(values);
                return (
                    <div className="justify-center items-center">
                        <Title title="Edit room information"/>
                        {state.admin.loading && <Loading />}
                        <div className="w-full xl:px-20 lg:px-16 md:px-3 sm:px-0 items-center bg-white">
                            <div className="w-full xl:px-4 lg:px-5 md:px-1 items-center bg-white">
                                <div className="container mx-auto">
                                    <Form className="max-w-full mx-auto p-16">
                                        <div className="flex-col w-full">
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
                    </div>
                )
            }}
        </Formik>
    );
}

export default RoomEditForm;
