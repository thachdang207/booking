import React from "react";
import { Button } from "reactstrap"

function FilterSideBar() {
    return (
        <div className="md:block w-full md:w-3/12 xl:w-2/1 bg-gray-200 p-6 rounded-md">
            <Button color="primary" className="block py-3 px-4">
                My Profile
            </Button>

            <div className="hidden md:block border-t w-2/3 my-2" />
            <Button color="primary" className="block py-3 px-4">
                My Bookings
            </Button>

            <div className="hidden md:block border-t w-2/3 my-2" />
        </div>
    );
}

export default FilterSideBar;
