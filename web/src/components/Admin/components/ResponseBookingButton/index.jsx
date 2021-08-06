import React from 'react';
import {Button} from 'reactstrap';
import {responseBookingRequests} from "../../../../redux/actions/admin.action";

function ResponseBookingButton({color, dispatch, token, bookingId, decide}) {
    const onResponseHandler = () => {
        responseBookingRequests(dispatch, token, bookingId, decide);
        setTimeout(() => {
            window.location.reload();
        },2000)
    }
    return (
        <div>
            <Button color={color} onClick={onResponseHandler}>
                {decide}
            </Button>
        </div>
    );
}

export default ResponseBookingButton;
