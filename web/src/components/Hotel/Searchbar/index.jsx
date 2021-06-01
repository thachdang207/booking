/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Formik, Form} from 'formik'
import {Button, FormGroup} from 'reactstrap'
import {DatePicker} from 'antd'
import moment from 'moment'
import {formatStrDate} from "../../../constants/function";

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}

Searchbar.defaultProps = {
    onSubmit: null,
}
const {RangePicker} = DatePicker;

export default function Searchbar(props) {
    const initialValues = {
        startTime: "",
        endTime: "",
    }

    const [date, setDate] = useState("");
    const [dateString, setDateString] = useState("");

    const disablePastDates = (current) => {
        return current && current < moment().endOf("day");
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const {values, setValues} = formikProps;

                return (
                    <div ref={props.refProp}>
                        <div className="items-center min-h-0 bg-white" data-aos="fade-up">
                            <div className="container mx-auto">
                                <Form
                                    className="sm:max-w-sm md:max-w-xl lg:max-w-4xl mx-auto my-5 xl:my-20 bg-gray-200 p-8 rounded-md shadow-sm">
                                    <div className="text-center">
                                        <h3 className="my-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Find
                                            deals on hotels, homes, and much more...</h3>
                                        <p className="text-gray-500 dark:text-gray-400">From cozy country homes to funky
                                            city apartments</p>
                                    </div>
                                    <div className="flex flex-col md:block md:w-full">
                                        <div className="inline-block py-3 md:w-3/4">
                                            <RangePicker
                                                format="YYYY-MM-DD"
                                                allowClear="true"
                                                placeholder={["Check in", "Check out"]}
                                                defaultValue={moment()}
                                                onChange={(value, dateString) => {
                                                    setDate(value);
                                                    setDateString(dateString);
                                                    setValues({
                                                        ...values,
                                                        startTime: formatStrDate(dateString[0]),
                                                        endTime: formatStrDate(dateString[1]),
                                                    });
                                                }}
                                                disabledDate={current => disablePastDates(current)}
                                                size="large"
                                                style={{
                                                    height: "auto",
                                                    width: "100%",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </div>
                                        <FormGroup
                                            className="md:w-1/4 inline-block"
                                        >
                                            <Button
                                                color="primary"
                                                type="submit"
                                                className="w-full text-white focus:outline-none"
                                            >
                                                Find
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
