import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "reactstrap"

function UserSiderBar() {
    const state = useSelector((state) => state);

    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        // eslint-disable-next-line
        if (state.auth.user_id != id) {
            history.push({
                pathname: "/401",
                state: {
                    message:
                        "You are not authorized, you'll be redirected in a bit"
                }
            });
        }
    }, [state.auth.user_id]); // eslint-disable-line

    return (
        <div className="hidden md:block w-full md:w-4/12 xl:w-3/12 bg-gray-200 pt-5 lg:p-6 rounded-sm ">
            <Link
                to={`/user-profile/${id}`}
            >
                <Button active className="block py-3 px-4">
                    My Profile
                </Button>
            </Link>

            <div className="hidden md:block border-t w-2/3 my-2"></div>

            <Link
                to={`/user-bookings/${id}`}
                
            >
                <Button className="block py-3 px-4">
                    My Bookings
                </Button>
            </Link>

            <div className="hidden md:block border-t w-2/3 my-2"></div>

            <Button className="block py-3 px-4">
                Change password
            </Button>
        </div>
    );
}

export default UserSiderBar;
