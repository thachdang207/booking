import React, { useEffect } from 'react'

function HomeAdmin() {
    useEffect(() => {
        document.title = `VIBO | Admin`;
    }, []);

    return (
        <>
            <h1>
                This is Home Admin
            </h1>
        </>
    )
}

export default HomeAdmin;