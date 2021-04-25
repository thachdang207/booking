import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Home() {

    useEffect(() => {
        document.title = `Super Admin`
    }, []);

    return (
        <div>
            <h1>This is Super admin Home page</h1>
            <div className="flex flex-col">
                <Link
                    className="hover:no-underline"
                    to="/super-admin/create-location">
                    Create Location
                </Link>
                <Link
                    className="hover:no-underline"
                    to="/super-admin/locations">
                    Locations list
                </Link>
            </div>
        </div>
    )
}
