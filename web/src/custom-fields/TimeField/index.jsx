import React from 'react'
import PropTypes from 'prop-types'
import {FormFeedback, FormGroup} from 'reactstrap'
import {TimePicker} from 'antd'
import {ErrorMessage} from 'formik'

const RangePicker = TimePicker.RangePicker;

TimeField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    style: PropTypes.object,
}

TimeField.defaultProps = {
    size: 'large',
    disabled: false,
    style: {}
}

function TimeField(props) {
    const {
        field, form, style, size, disabled
    } = props;
    const {name} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    return (
        <div>
            <FormGroup>
                <RangePicker
                    id={name}
                    {...field}

                    style={style}
                    size={size}

                    onChange={props.onChange}
                    disabled={disabled}
                    invalid={showError}
                />

                <ErrorMessage name={name} component={FormFeedback}/>
            </FormGroup>
        </div>
    )
}


export default TimeField

