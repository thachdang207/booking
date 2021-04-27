/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Formik, Form, FastField} from 'formik'
import {Button, FormGroup, Spinner} from 'reactstrap'
import * as Yup from 'yup'
import {TimePicker} from 'antd';

import SelectField from '../../../../custom-fields/SelectField'
import InputField from '../../../../custom-fields/InputField'
import {CITY_OPTIONS} from '../../../../constants/global'
import {createLocation} from '../../../../redux/actions/sAdmin.action'
import {getLocationTypes} from "../../../../redux/actions/city.action";

const RangePicker = TimePicker.RangePicker;
export default function CreateLocation(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const initialValues = {
        locationTypeId: null,
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
    const [location, setLocation] = useState(initialValues);

    const locationTypeOptions = [];

    useEffect(() => {
        state.city.locationTypes.map((type) => {
            let newType = {
                value: state.city.locationTypes.indexOf(type) + 1,
                label: type.name,
            };
            locationTypeOptions.push(newType);
        })
    }, [state.city.locationTypes]);

    useEffect(() => {
        getLocationTypes(dispatch);
        document.title = "Create new location";
    }, [])

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required').nullable(),
        locationTypeId: Yup.string().required('Location type is required').nullable(),
        city: Yup.string().required('City is required').nullable(),
    })

    const handleSubmit = (values) => {
        setTimeout(() => {
            setLocation({
                ...location,
                name: values.name,
                address: values.address,
                city: values.city,
                locationTypeId: state.city.locationTypes[values.locationTypeId - 1].id,
                contactPhoneNumber: values.contactPhoneNumber,
                contactEmail: values.contactEmail,
                price: values.price,
                description: values.description,
            })
        }, 500)
        createLocation(dispatch, state.sAdmin.token, location);
        console.log("Location: ", location);
    }

    const [time, setTime] = useState("");
    const [timeString, setTimeString] = useState("");

    const onTimeSelection = (value, timeString) => {
        setTime(value);
        setTimeString(timeString);
        console.log(timeString);
        setLocation({...location, workingTime: timeString});
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => handleSubmit(values)}
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
                                        <FastField
                                            name="name"
                                            component={InputField}
                                            placeholder="Name"
                                        />
                                        <div className="block w-full">
                                            <div className="inline-block w-2/3">
                                                <FastField
                                                    name="address"
                                                    component={InputField}
                                                    placeholder="Address"
                                                />
                                            </div>
                                            <div className="inline-block w-1/3">
                                                <FastField
                                                    name="city"
                                                    component={SelectField}
                                                    placeholder="City"
                                                    options={CITY_OPTIONS}
                                                />
                                            </div>
                                        </div>
                                        <FastField
                                            name="locationTypeId"
                                            component={SelectField}
                                            placeholder="Location Type"
                                            options={locationTypeOptions}
                                        />
                                        <RangePicker
                                            id="workingTime"
                                            size="large"
                                            style={{
                                                height: "auto",
                                                width: "auto",
                                                cursor: "pointer",
                                                borderRadius: "3px",
                                                marginBottom: "12px",
                                            }}
                                            onChange={onTimeSelection}
                                        />
                                        <div className="block w-full">
                                            <div className="inline-block w-1/2">
                                                <FastField
                                                    name="contactEmail"
                                                    component={InputField}
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="inline-block w-1/2">
                                                <FastField
                                                    name="contactPhoneNumber"
                                                    component={InputField}
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <FastField
                                            name="price"
                                            component={InputField}
                                            placeholder="Average Price"
                                        />
                                        <FastField
                                            name="description"
                                            component={InputField}
                                            placeholder="Description"
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
                                                className="w-full pt-1 text-white focus:outline-none"
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
