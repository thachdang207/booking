import React from 'react';

function AdminInfo({user:{image, fullName, email}}) {
    return (
        <div className="w-4/12 h-screen bg-gray-200 px-5 ml-20 my-3 rounded-sm font-sans">
            <div className="relative m-auto">
                <img
                    src={
                        image
                            ? image
                            : "http://placehold.it/300x300?text=avatar"
                    }
                    alt="avatar"
                    className="w-32 h-32 rounded-full object-cover m-5"
                />
                <h2>{fullName}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default AdminInfo;
