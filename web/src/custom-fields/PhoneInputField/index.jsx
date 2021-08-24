import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import { Label } from 'reactstrap'

PhoneInputField.propTypes = {
    className: PropTypes.string,
    form: PropTypes.any.isRequired,
    field: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    country: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
};

PhoneInputField.defaultProps = {
    className: '',
    onChange: null,
    country: 'vn',
    disabled: false,
    label: '',
};

function PhoneInputField(props) {
    const {
        className,
        field: { name, value },
        form: {
            errors, handleBlur, setFieldValue, touched,
        },
        form,
        label,
        country,
        onChange,
        disabled,
    } = props;

    const [isFocused, setFocused] = useState(false);
    const isError = getIn(touched, name) && getIn(errors, name);
    const errorStyle = isError ? 'error' : '';
    const filledStyle = (isFocused || value) ? 'filled' : '';
    const disabledStyle = disabled ? 'disabled' : '';

    const handleInputBlur = (e) => {
        setFocused(false);
        handleBlur(e);
    };

    const handleInputFocus = () => setFocused(true);

    const onValueChange = (phoneNumber) => {
        setFieldValue(name, phoneNumber);

        if (onChange !== null) {
            onChange(phoneNumber);
        }
    };

    return (
        <div className={`${className} ${errorStyle} ${filledStyle} ${disabledStyle} text-input-group`}>
            {label && <Label for={name} className="font-bold text-lg">{label}</Label>}
            <PhoneInput
                placeholder="Enter phone number"
                enableAreaCodes={true}
                name={name}
                value={value}
                onChange={onValueChange}
                country={country}
                inputStyle={{ 
                    color: 'green', 
                    width: '100%'
                }}
                containerStyle={{ width: '100%' }}
            />
            <div className="flex h-5 items-end text-red-100 text-xs">
                {isError && getIn(errors, name)}
            </div>
        </div>
    );
}

export default PhoneInputField;