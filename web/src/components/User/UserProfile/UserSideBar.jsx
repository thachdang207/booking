import React from "react";
import { Link } from "react-router-dom";
import { useSecureLs } from "../../Global/UseSecureLs";
import "./SideBar.css"

function UserSideBar() {
    const [id] = useSecureLs("user_id")

    return (
        <div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link to="/">
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                                Home
                            </span>
                        </Link>

                    </li>
                    <li className="has-subnav">
                        <Link
                            to={`/user/${id}`}
                            className="no-underline"
                        >
                            <i className="fa fa-user fa-2x"></i>
                            <span className="nav-text">
                                My profile
                            </span>
                        </Link>
                    </li>
                    <li className="has-subnav">
                        <Link
                            to={`/user/${id}/bookings`}
                            className="no-underline"
                        >
                            <i className="fa fa-list fa-2x"></i>
                            <span className="nav-text">
                                My booking histories
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav >
        </div >
    );
}

export default UserSideBar;
