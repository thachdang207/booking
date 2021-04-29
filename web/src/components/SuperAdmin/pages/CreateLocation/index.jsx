import React from 'react';
import CreateLocationForm from "./CreateLocationForm";

function CreateLocation() {
    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <div>
            <CreateLocationForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default CreateLocation;

