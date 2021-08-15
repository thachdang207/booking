import React from "react";
import { Link } from "react-router-dom";
import { useSecureLs } from "../../Global/UseSecureLs";
import "./UserProfile.css"

function UserSideBar() {
    const [id] = useSecureLs("user_id")

    return (
        <div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="no-underline"
                        >
                            <i className="fa fa-home fa-2x"></i>
                            <span className="nav-text">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
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
                    <li>
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
                <ul class="logout">
                    <li>
                        <Link to="/logout">
                            <i class="fa fa-power-off fa-2x"></i>
                            <span class="nav-text">
                                Logout
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav >
        </div >
    );
}

export default UserSideBar;
