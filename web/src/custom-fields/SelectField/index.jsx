import React from 'react'
import PropTypes from 'prop-types'
import {FormFeedback, FormGroup, Label} from 'reactstrap'
import Select from 'react-select'
import { ErrorMessage } from 'formik'


SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

SelectField.defaultProps = {
    options: '',
    label: '',
    placeholder: '',
    disabled: false,
}

function SelectField(props) {
    const {
        field, form, options, placeholder, disabled, label
    } = props;

    const { name, value } = field;
    const selectedOption = options.find(option => option.value === value)

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value
            : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            }
        };

        field.onChange(changeEvent);
    }


    const { errors, touched } = form;
    const showError = errors[name] && touched[name];



    return (
        <div>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}
                <Select
                    id={name}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectedOptionChange}

                    placeholder={placeholder}
                    isDisabled={disabled}
                    options={options}
                    className={showError ? 'is-invalid' : ''}
                />

                <ErrorMessage name={name} component={FormFeedback} />
            </FormGroup>
        </div>
    )
}


export default SelectField

