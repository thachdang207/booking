import React, { useEffect, useState } from 'react';
import { DatePicker } from "antd"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import moment from "moment";
import { countDiffDate, formatDate, formatPrice, formatStrDate } from "../../../constants/function";
import { bookRoom } from "../../../redux/actions/booking.action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../Global/ErrorMessage";
import SuccessMessage from "../../Global/SuccessMessage";
import { useSecureLs } from "../../Global/UseSecureLs";
import { Loading } from "../../Global/Loading";
import { PeopleOutline, CashOutline } from "react-ionicons"

const { RangePicker } = DatePicker;
const url = process.env.REACT_APP_API_URL
function BookingModal({ room: { id, name, price, capacity }, hotel }) {
    const initialValues = {
        startTime: "",
        endTime: "",
        roomId: id,
        returnUrl: "localhost:3000/",
        cancelUrl: `localhost:3000/hotel/${hotel.id}`
    }
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [token] = useSecureLs("token");

    const [show, setShow] = useState(false);
    const [bookingReq, setBookingReq] = useState(initialValues)
    const toggleShow = () => setShow(!show);

    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

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

    useEffect(() => {
        setTimeout(() => {
            state.book.success === true
                ? setSuccessAlert(true)
                : setErrorAlert(true)
        }, 100)
        const timer = setTimeout(() => {
            setSuccessAlert(false);
            setErrorAlert(false);
        }, 3000)
        return () => clearTimeout(timer)
    }, [state.book.success]);

    const history = useHistory();
    const onSubmitBooking = () => {
        bookRoom(dispatch, state.hotel.hotel.id, token, bookingReq);
        const checkOutURL = state.book.bookData ? state.book.bookData.link.href : "";
        if (state.book.success === true) {
            window.location.replace(checkOutURL);
        } else {
            const timer = setTimeout(() => {
                toggleShow()
            }, 3000)
            return () => clearTimeout(timer)
        }
    }

    const onOpenBookingModal = () => {
        if (state.auth.isAuthenticated) {
            toggleShow()
        } else {
            alert("You're not logged in yet!")
            setTimeout(() => {
                history.push("/login")
            }, 1000);
        }
    }

    let diffDate = countDiffDate(bookingReq.startTime, bookingReq.endTime)


    return (
        <div>
            <Button className="transform hover:scale-110" outline color="primary"
                onClick={onOpenBookingModal}>Book</Button>
            <Modal isOpen={show} toggle={toggleShow} centered size="lg">
                {state.book.loading && <Loading />}
                {successAlert && <SuccessMessage message="Your booking request has been sent, please wait until the host
                    accepts the offer! "/>}
                {errorAlert && <ErrorMessage errors={state.book.errors} />}
                <ModalHeader className="font-bold">
                    {name}
                </ModalHeader>
                <ModalBody className="text-2xl">
                    <p className="font-semibold flex">
                        <span className="font-light mr-3">
                            <PeopleOutline
                                color={'#00000'}
                                height="30px"
                                width="30px"
                            />
                        </span>{capacity > 2
                            ? `${capacity} People` : `${capacity} Person`}</p>
                    <p className="font-semibold flex">
                        <span className="font-light mr-3">
                            <CashOutline
                                color={'#00000'}
                                height="30px"
                                width="30px"
                            /> </span>{formatPrice(price)} VND</p>
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
                    <p className="font-semibold">
                        {bookingReq.startTime ? diffDate > 1 ? `${diffDate} days` : `${diffDate} day` : `${0} day`}
                    </p>
                    <p className="font-semibold">
                        <span className="font-light">Total price: </span>
                        {bookingReq.startTime
                            ? formatPrice(price * diffDate)
                            : formatPrice(price)} VND
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSubmitBooking}>Check out</Button>
                    <Button onClick={toggleShow}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default BookingModal;
