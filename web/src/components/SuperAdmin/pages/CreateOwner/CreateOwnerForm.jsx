/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Formik, Form, FastField } from 'formik'
import { Button, FormGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import * as Yup from 'yup'

import InputField from '../../../../custom-fields/InputField'

CreateOwnerForm.defaultProps = {
    onSubmit: null,
}

CreateOwnerForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default function CreateOwnerForm(props) {
    const initialValues = {
        fullName: "",
        email: "",
        password: "",
    }

    useEffect(() => {
        document.title = "Register a new owner";
    }, [])

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').nullable(),
        password: Yup.string().required('Password is required').nullable(),
        fullName: Yup.string().required('Hotel name is required').nullable(),
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
                    <div className="w-full xl:px-44 lg:px-36 md:px-24 sm:p-0 items-center min-h-screen bg-white">
                        <div className="text-center">
                            <h1 className="my-3 font-semibold font-serif text-gray-700 dark:text-gray-100 mt-10">Register a new location</h1>
                        </div>
                        <div className="w-full xl:p-10 lg:p-5 md:p-1 items-center min-h-screen bg-white"
                            data-aos="fade-up">
                            <div className="container mx-auto">
                                <Form className="w-2/3 mx-auto bg-gray-200 py-16 px-24 rounded-md shadow-sm">
                                    <div className="flex flex-col w-full">
                                        <FastField
                                            name="fullName"
                                            component={InputField}
                                            placeholder="Hotel Name"
                                            label="Hotel Name"
                                            value={values.fullName}
                                        />
                                        <FastField
                                            name="email"
                                            component={InputField}
                                            placeholder="Email"
                                            label="Email"
                                            type="email"
                                            value={values.email}
                                        />
                                        <FastField
                                            name="password"
                                            component={InputField}
                                            label="Password"
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
                                                Register
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
