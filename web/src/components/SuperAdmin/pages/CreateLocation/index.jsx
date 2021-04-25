import React, {useState} from 'react'
import {Formik, Form, FastField} from 'formik'
import {Button, FormGroup, Spinner} from 'reactstrap'
import * as Yup from 'yup'

import SelectField from '../../../../custom-fields/SelectField'
import InputField from '../../../../custom-fields/InputField'
import {CITY_OPTIONS} from '../../../../constants/global'

export default function CreateLocation(props) {
    const initialValues = {
        locationTypeId: '',
        name: '',
        address: '',
        city: '',
        workingTime: '',
        contactPhoneNumber: '',
        contactEmail: '',
        price: '',
        description: '',
        thumbnail: '',
        images: [],
        isFeatured: false,
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required').nullable(),
        locationTypeId: Yup.string().required('Location type is required').nullable(),
        city: Yup.string().required('City is required').nullable(),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const {isSubmitting} = formikProps;

                return (
                    <div className="w-full xl:p-32 lg:px-16 md:px-3 sm:p-0 items-center min-h-screen bg-white">
                        <div className="text-center">
                            <h1 className="my-3 font-semibold font-serif text-gray-800 dark:text-gray-200">Create
                                new Location</h1>
                        </div>
                        <div className="w-full xl:p-10 lg:p-5 md:p-1 items-center min-h-screen bg-white"
                             data-aos="fade-up">
                            <div className="container mx-auto">
                                <Form className="max-w-full mx-auto bg-gray-200 p-16 rounded-md shadow-sm">

                                    <div className="flex flex-col w-full">
                                        <div>
                                            <FastField
                                                name="name"
                                                component={InputField}
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div>
                                            <FastField
                                                name="address"
                                                component={InputField}
                                                placeholder="Address"
                                            />
                                        </div>
                                        <div>
                                            <FastField
                                                name="cityId"
                                                component={SelectField}
                                                placeholder="City"
                                                options={CITY_OPTIONS}
                                            />
                                        </div>
                                        <div>

                                        </div>
                                        <FormGroup>
                                            {/* <Link
                                                className="no-underline text-white"
                                                to={`/search/from_to=${initialValues.fromTo}
                                                &city=${initialValues.cityId}
                                                &guest=${initialValues.guest}`}
                                            > */}
                                            <Button
                                                type="submit"
                                                className="w-full text-white focus:outline-none"
                                            >
                                                {isSubmitting && <Spinner size="sm"/>}
                                                Create
                                            </Button>
                                            {/* </Link> */}
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
