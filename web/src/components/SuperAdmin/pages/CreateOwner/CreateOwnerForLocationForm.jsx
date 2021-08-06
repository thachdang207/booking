/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Formik, Form, FastField } from 'formik'
import { Button, FormGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import * as Yup from 'yup'

import InputField from '../../../../custom-fields/InputField'
import { useParams } from "react-router-dom";

CreateOwnerForLocationForm.defaultProps = {
    onSubmit: null,
}

CreateOwnerForLocationForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default function CreateOwnerForLocationForm(props) {
    const { id } = useParams();
    const initialValues = {
        fullName: "",
        email: "",
        password: "",
        locationId: id,
    }

    useEffect(() => {
        document.title = "Create an owner for location";
    }, [])

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').nullable(),
        password: Yup.string().required('Password is required').nullable(),
        fullName: Yup.string().required('Full name is required').nullable(),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, isSubmitting } = formikProps;

                return (
                    <div className="w-full xl:px-40 lg:px-30 md:px-20 sm:p-0 items-center min-h-screen bg-white">
                        <div className="text-center">
                            <h1 className="my-3 font-semibold font-serif text-gray-700 dark:text-gray-100">Create an
                                owner for this location</h1>
                        </div>
                        <div className="w-full xl:p-4 lg:p-5 md:p-1 items-center min-h-screen bg-white"
                            data-aos="fade-up">
                            <div className="container mx-auto">
                                <Form className="max-w-full mx-auto bg-gray-200 p-10 rounded-md shadow-sm">
                                    <div className="flex flex-col w-full">
                                        <FastField
                                            name="fullName"
                                            component={InputField}
                                            placeholder="Full Name"
                                            value={values.fullName}
                                        />
                                        <FastField
                                            name="email"
                                            component={InputField}
                                            placeholder="Email"
                                            type="email"
                                            value={values.email}
                                        />
                                        <FastField
                                            name="password"
                                            component={InputField}
                                            placeholder="Password"
                                            type="password"
                                            value={values.password}
                                        />
                                        <FormGroup>
                                            <Button
                                                type="submit"
                                                className="w-full pt-1 text-white focus:outline-none"
                                                color="primary"
                                            >
                                                Create
                                            </Button>
                                        </FormGroup>
                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Formik>
    )
}
