/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, FastField } from 'formik'
import { Button, FormGroup, Spinner } from 'reactstrap'
import { DatePicker } from 'antd'
// import {Link} from 'react-router-dom'
import moment from 'moment'
import * as Yup from 'yup'

import SelectField from '../../../custom-fields/SelectField'
import { CITY_OPTIONS } from '../../../constants/global'
import { GUEST_OPTIONS } from '../../../constants/global'

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
    refProp: PropTypes.object,
}

Searchbar.defaultProps = {
    onSubmit: null,
    refProp: null
}
const { RangePicker } = DatePicker;

export default function Searchbar(props) {
    const initialValues = {
        fromTo: [],
        cityId: null,
        guest: null,
    }

    const [date, setDate] = useState("");
    const [dateString, setDateString] = useState("");

    const onDateSelection = (value, dateString) => {
        setDate(value);
        setDateString(dateString);
        initialValues.fromTo = dateString;
    }

    const disablePastDates = (current) => {
        return current && current < moment().endOf("day");
    }

    const validationSchema = Yup.object().shape({
        fromTo: Yup.array().required('This field is required').nullable(),
        cityId: Yup.number().required('This field is required').nullable(),
        guest: Yup.number().required('This field is required').nullable(),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { isSubmitting } = formikProps;

                return (
                    <div ref={props.refProp}>
                        <div className="items-center min-h-0 bg-white" data-aos="fade-up">
                            <div className="container mx-auto">
                                <Form className="sm:max-w-sm md:max-w-xl lg:max-w-6xl mx-auto my-5 xl:my-20 bg-gray-200 p-8 rounded-md shadow-sm">
                                    <div className="text-center">
                                        <h3 className="my-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Find deals on hotels, homes, and much more...</h3>
                                        <p className="text-gray-500 dark:text-gray-400">From cozy country homes to funky city apartments</p>
                                    </div>
                                    <div className="flex flex-col md:block md:w-full">
                                        <div className="inline-block py-3 md:w-1/4">
                                            <RangePicker
                                                id="fromTo"
                                                format="MMM Do"
                                                allowClear="true"
                                                placeholder={["Check in", "Check out"]}
                                                defaultValue={moment()}
                                                onChange={onDateSelection}
                                                disabledDate={current => disablePastDates(current)}
                                                size="large"
                                                style={{
                                                    height: "auto",
                                                    width: "auto",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </div>
                                        <div className="inline-block md:w-1/4">
                                            <FastField
                                                name="cityId"
                                                component={SelectField}
                                                placeholder="City"
                                                options={CITY_OPTIONS}
                                            />
                                        </div>
                                        <div className="inline-block md:w-1/4">
                                            <FastField
                                                name="guest"
                                                component={SelectField}
                                                placeholder="Guest"
                                                options={GUEST_OPTIONS}
                                            />
                                        </div>
                                        <FormGroup
                                            className="md:w-1/4 inline-block"
                                        >
                                            {/* <Link
                                                className="no-underline text-white"
                                                to={`/search/from_to=${initialValues.fromTo}
                                                &city=${initialValues.cityId}
                                                &guest=${initialValues.guest}`}
                                            > */}
                                            <Button
                                                type="submit"
                                                className="w-full text-white focus:outline-none"
                                                color="primary"
                                            >
                                                {isSubmitting && <Spinner size="sm" />}
                                                    Find
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
