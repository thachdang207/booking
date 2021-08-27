import React from 'react';
import { ArrowBackCircleOutline, ArrowForwardCircleOutline } from "react-ionicons"

function TakeSkip(props) {
    const { skip, total, onPageChange } = props;
    const handlePageChange = (skip) => {
        if (skip >= 0 && skip <= total) {
            onPageChange(skip);
        }
    }
    return (
        <div className="flex justify-center items-center p-2">
            <ArrowBackCircleOutline
                width="30px"
                height="30px"
                disabled={skip === 0}
                cssClasses={`${skip === 0 && "disabled:opacity-50 disabled:cursor-not-allowed"} cursor-pointer mr-2`}
                onClick={() => handlePageChange(skip - 10)}
            />
            <ArrowForwardCircleOutline
                width="30px"
                height="30px"
                cssClasses={`cursor-pointer`}
                onClick={() => handlePageChange(skip + 10)}
            />
        </div>
    );
}

export default TakeSkip;