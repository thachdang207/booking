import React, {useEffect, useState} from 'react';
import {DatePicker} from "antd"
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Alert} from "reactstrap";
import moment from "moment";
import {countDiffDate, formatDate, formatPrice, formatStrDate} from "../../../constants/function";
import {bookRoom} from "../../../redux/actions/booking.action";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import ErrorMessage from "../../Global/ErrorMessage";
import SuccessMessage from "../../Global/SuccessMessage";

const {RangePicker} = DatePicker;

function BookingModal({room: {id, name, price, capacity}}) {
    const initialValues = {
        startTime: "",
        endTime: "",
        roomId: id,
    }
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [show, setShow] = useState(false);
    const [bookingReq, setBookingReq] = useState(initialValues)
    const toggleShow = () => setShow(!show);

    const [success, setSuccess] = useState(false);
    const showSuccessAlert = () => setSuccess(true);

    const [error, setError] = useState(false);
    const showErrorAlert = () => setError(true);

    const [date, setDate] = useState("");
    const [dateString, setDateString] = useState("");

    const onDateSelection = (value, dateStr) => {
        setDate(value)
        setDateString(dateStr)
        setBookingReq({
            ...bookingReq,
            startTime: formatStrDate(dateStr[0]),
            endTime: formatStrDate(dateStr[1]),
        })
    }

    const disablePastDates = (current) => {
        return current && current < moment().endOf("day");
    }
    const history = useHistory();
    const onSubmitBooking = () => {
        if (state.auth.isAuthenticated) {
            bookRoom(dispatch, state.hotel.hotel.id, state.auth.token, bookingReq);
            const timer = setTimeout(() => {
                state.book.success
                    ? showSuccessAlert()
                    : showErrorAlert()
            }, 1000)
            setTimeout(() => {
                toggleShow();
            }, 3000)
            return () => clearTimeout(timer);
        } else {
            setTimeout(() => {
                history.push("/login")
            }, 1000);
        }
    }

    let diffDate = countDiffDate(bookingReq.startTime, bookingReq.endTime)


    return (
        <div>
            <Button onClick={toggleShow}>Book</Button>
            <Modal isOpen={show} toggle={toggleShow} centered size="lg">
                {success && <SuccessMessage message="Your booking request has been sent, please wait until the host
                    accepts the offer! "/>}
                {error && <ErrorMessage errors={state.book.errors}/>}
                <ModalHeader className="font-bold">
                    {name}
                </ModalHeader>
                <ModalBody className="text-2xl">
                    <p className="font-bold"><span className="font-light">Max guests: </span>{capacity > 2
                        ? `${capacity} People` : `${capacity} Person`}</p>
                    <p className="font-bold"><span className="font-light">Price: </span>{formatPrice(price)} VND</p>
                    <RangePicker
                        format="YYYY-MM-DD"
                        id="fromTo"
                        allowClear="true"
                        placeholder={["Check in", "Check out"]}
                        onChange={onDateSelection}
                        disabledDate={current => disablePastDates(current)}
                        size="large"
                        style={{
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                            marginBottom: "10px"
                        }}
                    />
                    <p className="font-semibold">
                        <span className="font-light">From: </span>
                        {bookingReq.startTime ? formatDate(bookingReq.startTime) : ""}
                    </p>
                    <p className="font-semibold">
                        <span className="font-light">To: </span>
                        {bookingReq.endTime ? formatDate(bookingReq.endTime) : ""}
                    </p>
                    <p className="font-bold">
                        {bookingReq.startTime ? diffDate > 1 ? `${diffDate} days` : `${diffDate} day` : `${0} day`}
                    </p>
                    <p className="font-bold">
                        <span className="font-light">Total price: </span>
                        {bookingReq.startTime
                            ? formatPrice(price * diffDate)
                            : formatPrice(price)} VND
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onSubmitBooking}>Book</Button>
                    <Button onClick={toggleShow}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default BookingModal;
