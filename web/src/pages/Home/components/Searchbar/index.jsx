/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Formik, Form, FastField} from 'formik'
import {Button, FormGroup, Spinner} from 'reactstrap'
import {DatePicker} from 'antd'
// import {Link} from 'react-router-dom'
import moment from 'moment'
import * as Yup from 'yup'

import SelectField from '../../../../custom-fields/SelectField'
import {CITY_OPTIONS} from '../../../../constants/global'
import {GUEST_OPTIONS} from '../../../../constants/global'

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}

Searchbar.defaultProps = {
    onSubmit: null,
}
const {RangePicker} = DatePicker;

export default function Searchbar(props) {
    const initialValues = {
        fromTo: '',
        cityId: null,
        guest: null,
    }

    const [date, setDate] = useState("");
    const [dateString, setDateString] = useState("");

    const onDateSelection = (value, dateString) => {
        setDate(value);
        setDateString(dateString);
        initialValues.fromTo = dateString;

        console.log("Change time: ", initialValues.fromTo)
    }

    const disablePastDates = (current) => {
        return current && current < moment().endOf("day");
    }

    const validationSchema = Yup.object().shape({
        fromToDay: Yup.string().required('This field is required').nullable(),
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
                const {isSubmitting} = formikProps;

                return (
                    <div className="flex items-center min-h-screen bg-gray-100 ">
                        <div className="container mx-auto">
                            <Form className="max-w-2xl mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                                <div class="text-center">
                                    <h3 class="my-3 text-xl font-semibold text-gray-700 dark:text-gray-200">Find deals on hotels, homes, and much more...</h3>
                                    <p class="text-gray-400 dark:text-gray-400">From cozy country homes to funky city apartments</p>
                                </div>
                                <div className="m-4">
                                    <div className="text-center block">
                                        <RangePicker
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
                                        <Button 
                                            type="submit"
                                            className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                                        >
                                            {isSubmitting && <Spinner size="sm"/>}
                                            {/* <Link
                                                className="no-underline text-white"
                                                to={`/search/from_to=${initialValues.fromTo}
                                                &city=${initialValues.cityId}
                                                &guest=${initialValues.guest}`}
                                            >
                                                Find
                                            </Link> */}
                                            Find
                                        </Button>
                                    </FormGroup>
                                </div>
                                
                            </Form>
                        </div>
                        
                    </div>
                )
            }}
        </Formik>
    )
}
