import React from 'react';
import {Button} from 'reactstrap';
import {responseBookingRequests} from "../../../../redux/actions/admin.action";

function ResponseBookingButton({color, dispatch, token, bookingId, decide}) {
    return (
        <div>
            <Button color={color} onClick={() => responseBookingRequests(dispatch, token, bookingId, decide)}>
                {decide}
            </Button>
        </div>
    );
}

export default ResponseBookingButton;
