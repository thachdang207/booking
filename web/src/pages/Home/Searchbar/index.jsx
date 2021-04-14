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
                        <div className="flex items-center min-h-0 bg-white" data-aos="fade-up">
                            <div className="container mx-auto">
                                <Form className="max-w-sm lg:max-w-4xl mx-auto my-5 xl:my-20 bg-gray-200 p-8 rounded-md shadow-sm">
                                    <div className="text-center">
                                        <h3 className="my-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Find deals on hotels, homes, and much more...</h3>
                                        <p className="text-gray-500 dark:text-gray-400">From cozy country homes to funky city apartments</p>
                                    </div>
                                    <div className="m-4">
                                        <div className="text-center block">
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
                                                    marginLeft: "auto",
                                                    marginRight: "auto",
                                                    width: "auto",
                                                    cursor: "pointer",
                                                    textAlign: "left"
                                                }}
                                            />
                                        </div>
                                        <br />
                                        <FastField
                                            name="cityId"
                                            component={SelectField}
                                            placeholder="Which city do you want to go?"
                                            options={CITY_OPTIONS}
                                        />
                                        <FastField
                                            name="guest"
                                            component={SelectField}
                                            placeholder="The number of guests?"
                                            options={GUEST_OPTIONS}
                                        />

                                        <FormGroup>
                                            {/* <Link
                                                className="no-underline text-white"
                                                to={`/search/from_to=${initialValues.fromTo}
                                                &city=${initialValues.cityId}
                                                &guest=${initialValues.guest}`}
                                            > */}
                                            <Button
                                                type="submit"
                                                className="w-full px-3 py-4 text-white focus:outline-none"
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
