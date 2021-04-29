import React, {useState} from 'react';
import {DatePicker} from "antd"
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import moment from "moment";

const {RangePicker} = DatePicker;

function BookingModal({room: {id, name, price, capacity}}) {
    const initialValues = {
        fromTo: [],
        roomId: id,
        status: "",
    }

    const formatPrice = (price) => {
        let priceString = '';
        price = Math.floor(price);
        while (price > 999) {
            let num = price % 1000;
            priceString += '.' + num;
            price = Math.floor(price / 1000);
            if (price <= 999) {
                priceString = price + '' + priceString;
                break;
            }
        }
        return priceString;
    }

    const [show, setShow] = useState(false);
    const [bookingReq, setBookingReq] = useState(initialValues)
    const toggleShow = () => setShow(!show);

    const [date, setDate] = useState("");
    const [dateString, setDateString] = useState("");

    const onDateSelection = (value, dateStr) => {
        setDate(value)
        setDateString(dateStr)
        console.log(dateStr)
    }

    const disablePastDates = (current) => {
        return current && current < moment().endOf("day");
    }

    const onSubmitBooking = () => {
        setBookingReq({
            ...bookingReq,
            fromTo: dateString,
            status: "Pending"
        })
        console.log(bookingReq)
        alert("Your request is pending.")
    }
    return (
        <div>
            <Button onClick={toggleShow}>Book</Button>
            <Modal isOpen={show} toggle={toggleShow} centered size="lg">
                <ModalHeader className="font-bold">
                    {name}
                </ModalHeader>
                <ModalBody className="text-2xl">
                    <p className="font-bold"><span className="font-light">Max guests: </span>{capacity > 2
                        ? `${capacity} People` : `${capacity} Person`}</p>
                    <p className="font-bold"><span className="font-light">Price: </span>{formatPrice(price)} VND</p>
                    <RangePicker
                        showTime={{format: 'HH:mm'}}
                        format="YYYY-MM-DD HH:mm"
                        id="fromTo"
                        allowClear="true"
                        placeholder={["Check in", "Check out"]}
                        defaultValue={moment()}
                        onChange={onDateSelection}
                        disabledDate={current => disablePastDates(current)}
                        size="large"
                        style={{
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                        }}
                    />
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
