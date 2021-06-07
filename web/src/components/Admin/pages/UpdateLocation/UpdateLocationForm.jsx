/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Formik, Form, FastField} from 'formik'
import {Button, FormGroup, Spinner} from 'reactstrap'
import PropTypes from 'prop-types'

import SelectField from '../../../../custom-fields/SelectField'
import InputField from '../../../../custom-fields/InputField'
import {CITY_OPTIONS} from '../../../../constants/global'
import {getLocationTypes} from "../../../../redux/actions/city.action";
import {TimePicker} from "antd";
import {Loading} from "../../../Global/Loading";
import {findLabel, findValue, nullOrNot} from "../../../../constants/function";

const {RangePicker} = TimePicker;

UpdateLocationForm.defaultProps = {
    onSubmit: null,
    location: null,
}

UpdateLocationForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
}

export default function UpdateLocationForm(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const initialValues = {
        locationTypeId: props.location.locationTypeId,
        name: props.location.name,
        address: props.location.address,
        city: props.location.city,
        workingTime: {
            startTime: '',
            endTime: '',
        },
        contactPhoneNumber: props.location.contactPhoneNumber,
        contactEmail: props.location.contactEmail,
        price: props.location.price,
        description: props.location.description,
        thumbnail: props.location.thumbnail,
    }

    const LOCATION_TYPES_OPTIONS = [];

    useEffect(() => {
        state.city.locationTypes.map((type) => {
            LOCATION_TYPES_OPTIONS.push({
                value: state.city.locationTypes.indexOf(type) + 1,
                label: type.name,
            });
            return LOCATION_TYPES_OPTIONS;
        })
    }, [state.city.locationTypes]);

    useEffect(() => {
        getLocationTypes(dispatch);
        document.title = "Update location information";
    }, [])


    const [time, setTime] = useState("");
    const [timeString, setTimeString] = useState("");

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const {values, setValues, isSubmitting} = formikProps;
                const locationTypeName = values.locationTypeId === "0aea2461-d162-4fa8-8fbb-c90fdba946fa" ? "Hotel" : "Homestay";
                return (
                    <div className="w-full xl:px-40 lg:px-36 md:px-23 sm:p-0 items-center min-h-screen bg-white">
                        <div className="text-center">
                            <h1 className="my-3 font-semibold font-serif text-gray-800 dark:text-gray-200">Update
                                Location Information</h1>
                        </div>
                        {state.admin.loading && <Loading/>}
                        <div className="w-full xl:p-4 lg:p-5 md:p-1 items-center min-h-screen bg-white"
                             data-aos="fade-up">
                            <div className="container mx-auto">
                                <Form className="max-w-full mx-auto bg-gray-200 p-16 rounded-md shadow-sm">
                                    <div className="flex flex-col w-full">
                                        <FastField
                                            name="name"
                                            component={InputField}
                                            placeholder="Name"
                                            value={values.name}
                                        />
                                        <div className="block w-full">
                                            <div className="inline-block w-2/3">
                                                <FastField
                                                    name="address"
                                                    component={InputField}
                                                    placeholder="Address"
                                                    value={values.address}
                                                />
                                            </div>
                                            <div className="inline-block w-1/3">
                                                <FastField
                                                    name="city"
                                                    component={SelectField}
                                                    placeholder="City"
                                                    options={CITY_OPTIONS}
                                                    defaultValue={{
                                                        value: findValue(CITY_OPTIONS, values.city.name),
                                                        label: values.city.name
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <FastField
                                            name="locationTypeId"
                                            component={SelectField}
                                            placeholder="Location Type"
                                            options={LOCATION_TYPES_OPTIONS}
                                            defaultValue={{
                                                value: findValue(LOCATION_TYPES_OPTIONS, locationTypeName),
                                                label: locationTypeName,
                                            }}
                                        />
                                        <RangePicker
                                            format="HH:mm"
                                            id="workingTime"
                                            allowClear="true"
                                            onChange={(value, timeString) => {
                                                setTime(value);
                                                setTimeString(timeString);
                                                setValues({
                                                    ...values,
                                                    workingTime: {
                                                        startTime: timeString[0],
                                                        endTime: timeString[1],
                                                    },
                                                });
                                            }}
                                            size="large"
                                            style={{
                                                height: "auto",
                                                width: "100%",
                                                cursor: "pointer",
                                                borderRadius: "3px",
                                                marginBottom: "12px",
                                            }}
                                        />
                                        <div className="block w-full">
                                            <div className="inline-block w-1/2">
                                                <FastField
                                                    name="contactEmail"
                                                    component={InputField}
                                                    placeholder="Email"
                                                    value={nullOrNot(values.contactEmail)}
                                                />
                                            </div>
                                            <div className="inline-block w-1/2">
                                                <FastField
                                                    name="contactPhoneNumber"
                                                    component={InputField}
                                                    placeholder="Phone Number"
                                                    value={nullOrNot(values.contactPhoneNumber)}
                                                />
                                            </div>
                                        </div>
                                        <FastField
                                            name="price"
                                            component={InputField}
                                            placeholder="Average Price"
                                            value={values.price.slice(1)}
                                        />
                                        <FastField
                                            name="description"
                                            component={InputField}
                                            placeholder="Description"
                                            value={values.description}
                                            type="textarea"
                                        />
                                        <FormGroup>
                                            <Button
                                                type="submit"
                                                className="w-full pt-1 text-white focus:outline-none"
                                                color="primary"
                                                onClick={() => {
                                                    setValues({
                                                        ...values,
                                                        locationTypeId: state.city.locationTypes[values.locationTypeId - 1].id,
                                                    });
                                                }}
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
                )
            }}
        </Formik>
    )
}
