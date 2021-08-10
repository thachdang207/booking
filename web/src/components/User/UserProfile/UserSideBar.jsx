import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap"
import {useSecureLs} from "../../Global/UseSecureLs";

function UserSideBar() {
    const [id] = useSecureLs("user_id")

    return (
        <div className="md:block w-full md:w-4/12 xl:w-3/12 bg-gray-200 pt-5 lg:p-6 rounded-sm">
            <Link
                to={`/user/${id}`}
                className="no-underline"
            >
                <Button color="primary" className="block py-3 px-4">
                    My Profile
                </Button>
            </Link>

            <div className="hidden md:block border-t w-2/3 my-2"/>

            <Link
                to={`/user/${id}/bookings`}
                className="no-underline"
            >
                <Button color="primary" className="block py-3 px-4">
                    My Bookings
                </Button>
            </Link>

            <div className="hidden md:block border-t w-2/3 my-2"/>
        </div>
    );
}

export default UserSideBar;
