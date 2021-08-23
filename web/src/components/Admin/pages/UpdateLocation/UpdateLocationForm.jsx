import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, FastField } from 'formik'
import { Button, FormGroup, Spinner, Label } from 'reactstrap'
import PropTypes from 'prop-types'

import SelectField from '../../../../custom-fields/SelectField'
import InputField from '../../../../custom-fields/InputField'
import PhoneInputField from '../../../../custom-fields/PhoneInputField'
import { getLocationTypes } from "../../../../redux/actions/city.action";
import { TimePicker } from "antd";
import { Loading } from "../../../Global/Loading";
import { findLabel, findValue, nullOrNot } from "../../../../constants/function";

const { RangePicker } = TimePicker;

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
        cityId: props.location.cityId,
        // city: props.location.city,
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
    const CITY_OPTIONS = [];
    const cities = useSelector((state) => state.city.cities)
    const locationTypes = useSelector((state) => state.city.locationTypes)
    useEffect(() => {
        locationTypes.map((type) => {
            LOCATION_TYPES_OPTIONS.push({
                value: type.id,
                label: type.name,
            });
            return LOCATION_TYPES_OPTIONS;
        })

        cities.map((city) => {
            CITY_OPTIONS.push({
                value: city.id,
                label: city.name,
            });
            return CITY_OPTIONS;
        })
    }, [state.city]);

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
                const { values, setValues, isSubmitting } = formikProps;
                const locationTypeName = values.locationTypeId === "0aea2461-d162-4fa8-8fbb-c90fdba946fa" ? "Hotel" : "Homestay";
                return (
                    <div className="w-full xl:px-40 lg:px-36 md:px-23 sm:p-0 items-center min-h-screen">
                        {state.admin.loading && <Loading />}
                        <div className="w-full xl:p-10 lg:p-5 md:p-1 items-center min-h-screen">
                            <div className="container mx-auto">
                                <Form className="max-w-full mx-auto bg-gray-200 px-28 py-8 rounded-md shadow-sm">
                                    <div className="flex flex-col w-full">
                                        <FastField
                                            name="name"
                                            component={InputField}
                                            placeholder="Name"
                                            label="Hotel name"
                                            value={values.name}
                                        />
                                        <div className="block w-full">
                                            <div className="inline-block w-2/3">
                                                <FastField
                                                    name="address"
                                                    component={InputField}
                                                    label="Address"
                                                    placeholder="Address"
                                                    value={values.address}
                                                />
                                            </div>
                                            <div className="inline-block w-1/3">
                                                <FastField
                                                    name="cityId"
                                                    label="City"
                                                    component={SelectField}
                                                    options={CITY_OPTIONS}
                                                    defaultValue={{
                                                        value: props.location.city ? findValue(CITY_OPTIONS, props.location.city.name) : "",
                                                        label: props.location.city ? props.location.city.name : ""
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <FastField
                                            name="locationTypeId"
                                            component={SelectField}
                                            label="Location type"
                                            placeholder="Location Type"
                                            options={LOCATION_TYPES_OPTIONS}
                                            defaultValue={{
                                                value: findValue(LOCATION_TYPES_OPTIONS, locationTypeName),
                                                label: locationTypeName,
                                            }}
                                        />
                                        <Label for="workingTime" className="font-bold">Working time</Label>
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
                                                    label="Contact email"
                                                    value={nullOrNot(values.contactEmail)}
                                                />
                                            </div>
                                            <div className="inline-block w-1/2">
                                                <FastField
                                                    name="contactPhoneNumber"
                                                    label="Phone number"
                                                    component={PhoneInputField}
                                                    value={nullOrNot(values.contactPhoneNumber)}
                                                />
                                            </div>
                                        </div>
                                        <FastField
                                            name="price"
                                            component={InputField}
                                            placeholder="Average Price"
                                            label="Average Price"
                                            value={values.price}
                                        />
                                        <FastField
                                            name="description"
                                            component={InputField}
                                            placeholder="Description"
                                            label="Description"
                                            value={values.description}
                                            type="textarea"
                                        />
                                        <FormGroup>
                                            <Button
                                                type="submit"
                                                className="w-full pt-1 text-gray-900 bg- focus:outline-none"
                                            >
                                                {isSubmitting && <Spinner size="sm" />}
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
