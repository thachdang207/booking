/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Formik, Form, FastField} from 'formik'
import {Button, FormGroup, Spinner} from 'reactstrap'
import * as Yup from 'yup'

import SelectField from '../../../../custom-fields/SelectField'
import InputField from '../../../../custom-fields/InputField'
import TimeField from '../../../../custom-fields/TimeField'
import {CITY_OPTIONS} from '../../../../constants/global'
import {createLocation} from '../../../../redux/actions/sAdmin.action'
import {getLocationTypes} from "../../../../redux/actions/city.action";
import PropTypes from "prop-types";

CreateLocationForm.propTypes = {
    onSubmit: PropTypes.func,
}

CreateLocationForm.defaultProps = {
    onSubmit: null,
}

export default function CreateLocationForm(props) {
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
            locationTypeOptions.push({
                value: state.city.locationTypes.indexOf(type) + 1,
                label: type.name,
            });
            return locationTypeOptions;
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

    const onSubmitHandler = () => {
        const formData = new FormData();

        formData.append("_method", "PUT");
        formData.append("locationTypeId", location.locationTypeId);
        formData.append("name", location.name);
        formData.append("contactPhoneNumber", location.contactPhoneNumber);
        formData.append("contactEmail", location.contactEmail);
        formData.append("address", location.address);
        formData.append("city", location.city);
        formData.append("price", location.price);
        formData.append("description", location.description);
        formData.append("thumbnail", location.thumbnail);
        formData.append("isFeatured", location.isFeatured);
        formData.append("image", location.image);

        for (let value of formData.values()) {
            console.log(value);
        }
        createLocation(dispatch, state.sAdmin.token, formData);
    }

    const [time, setTime] = useState("");
    const [timeString, setTimeString] = useState("");

    const onTimeSelection = (value, timeString) => {
        setTime(value);
        setTimeString(timeString);
        console.log(timeString);
    }

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
        console.log("Location: ", location);
    }

    const timeStyle = {
        height: "auto",
        width: "100%",
        cursor: "pointer",
        borderRadius: "3px",
        marginBottom: "12px",
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const {values, isSubmitting} = formikProps;
                console.log(values);
                return (
                    <div className="w-full xl:px-32 lg:px-16 md:px-3 sm:p-0 items-center min-h-screen bg-white">
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
                                        <FastField
                                            name="workingTime"
                                            size="large"
                                            style={timeStyle}
                                            onBlur={formikProps.handleBlur("workingTime")}
                                            component={TimeField}
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
