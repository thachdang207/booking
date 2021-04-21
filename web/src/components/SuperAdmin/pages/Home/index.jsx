import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    useEffect(() => {
        document.title = `Super Admin`
    }, []);

    return (
        <div>
            <h1>This is super admin home page</h1>
            <Link to="/super-admin/create-location">
                Create Location
            </Link>
        </div>
    )
}
