/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, FastField } from 'formik'
import { Button, FormGroup, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'

import InputField from '../../custom-fields/InputField'

SearchHotel.propTypes = {
    onSubmit: PropTypes.func,
}

SearchHotel.defaultProps = {
    onSubmit: null,
}

export default function SearchHotel(props) {
    const initialValues = {
        hotel: ""
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, isSubmitting } = formikProps;

                return (
                    <div ref={props.refProp}>
                        <div className="items-center min-h-0 bg-white" data-aos="fade-up">
                            <div className="container mx-auto">
                                <Form className="sm:max-w-sm md:max-w-xl lg:max-w-6xl mx-auto my-5 xl:my-20 bg-gray-200 p-8 rounded-md shadow-sm">
                                    <div className="text-center">
                                        <h3 className="my-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Find deals on hotels, homes, and much more...</h3>
                                    </div>
                                    <div className="flex flex-col md:block md:w-full">
                                        <div className="inline-block md:w-2/3">
                                            <FastField
                                                name="hotel"
                                                component={InputField}
                                                placeholder="Find hotels"
                                                value={values.hotel}
                                            />
                                        </div>
                                        <FormGroup
                                            className="md:w-1/3 inline-block"
                                        >
                                            <Link
                                                className="no-underline text-white"
                                                to={`/search/hotel=${values.hotel}`}
                                            >
                                                <Button
                                                    type="submit"
                                                    className="w-full text-white focus:outline-none"
                                                    color="primary"
                                                >
                                                    {isSubmitting && <Spinner size="sm" />}
                                                    Find
                                                </Button>
                                            </Link>
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
