import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'reactstrap'
import './Global.css'

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { page, count, total } = pagination;
    //Page is page number
    //Count is number of values in 1 page
    //Total is number of total values
    const totalPages = Math.ceil(total / count)
    const handlePageChange = (newPage) => {
        onPageChange(newPage);
    }

    return (
        <div
            className="slider-button-container"
        >
            <Button
                color="dark"
                className="px-3 mx-3"
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}
            >
                Prev
            </Button>
            <h3>
                <Badge>{pagination.page}</Badge>
            </h3>

            <Button
                color="dark"
                className="px-3 mx-3"
                disabled={page >= totalPages}
                onClick={() => handlePageChange(page + 1)}
            >
                Next
            </Button>
        </div>
    );
}

export default Pagination;