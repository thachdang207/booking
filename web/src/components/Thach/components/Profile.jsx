import React, { useState, useCallback } from "react";
import { MailOutline, CallOutline, BusinessOutline, HomeOutline } from "react-ionicons"
import "../../User/UserProfile/UserProfile.css"

function Profile({ admin }) {
    const [popupImage, setPopupImage] = useState(false);
    const togglePopupImage = () => setPopupImage(!popupImage)
    const hotelSliders = admin.user.location ? admin.user.location.images : [
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/random",
    ]
    const [index, setIndex] = useState(0);

    const handlePrevSlider = useCallback(() => {
        setIndex((prevIndex) => (prevIndex - 1 + hotelSliders.length) % hotelSliders.length)
    }, [])

    const handleNextSlider = useCallback(() => {
        setIndex((nextIndex) => (nextIndex + 1) % hotelSliders.length)
    }, [])


    return (
        <>
            <div className="p-4">
                <div className="w-full h-screen flex flex-col xl:flex-row">
                    <div className="relative w-full xl:w-1/3 h-full mb-6">
                        <div className="relative w-full h-full">
                            {admin && (
                                <div className="popup__image" style={{ "display": popupImage ? "block" : "none" }}>
                                    <span
                                        className="close"
                                        onClick={togglePopupImage}
                                    >&times;</span>
                                    <img
                                        className="popup__image-content"
                                        src={
                                            admin.user.avatar
                                                ? admin.user.avatar
                                                : "https://source.unsplash.com/random"
                                        }
                                        alt="avatar"
                                    />
                                </div>
                            )}
                            <div className="p-10 rounded-xl">
                                <div className="transform">
                                    <div
                                        className="bg-gray-100 h-auto rounded-2xl overflow-hidden shadow-lg mt-0"
                                    >
                                        {admin && (
                                            <div>
                                                <div className="relative">
                                                    <img
                                                        src={
                                                            admin.user.avatar
                                                                ? admin.user.avatar
                                                                : "https://source.unsplash.com/random"
                                                        }
                                                        alt="avatar"
                                                        className="w-full h-80 object-cover shadow-md transition hover:opacity-80 cursor-pointer"
                                                        onClick={togglePopupImage}
                                                    />
                                                </div>
                                                <div className="py-4 sm:px-2 md:px-8 xl:px-12">
                                                    <h1 className="my-4 font-sans text-center font-bold">
                                                        {admin.user.fullName}
                                                    </h1>
                                                    <p className="flex items-center">
                                                        <MailOutline
                                                            color={"#818CF8"}
                                                            height="30px"
                                                            width="30px"
                                                        />
                                                        <span className="font-semibold mt-2 ml-2">
                                                            Email: <small className="font-medium ml-1 text-lg text-indigo-700">
                                                                {admin.user.email}
                                                            </small>
                                                        </span>
                                                    </p>
                                                    <p className="flex items-center mt-2">
                                                        <HomeOutline
                                                            color={"#818CF8"}
                                                            height="30px"
                                                            width="30px"
                                                        />
                                                        <span className="font-semibold mt-2 ml-2">
                                                            Address: <small className="font-medium ml-1 text-lg">
                                                                {admin.user.address}
                                                            </small>
                                                        </span>
                                                    </p>
                                                    <p className="flex items-center mt-2">
                                                        <BusinessOutline
                                                            color={"#818CF8"}
                                                            height="30px"
                                                            width="30px"
                                                        />
                                                        <span className="font-semibold mt-2 ml-2">
                                                            City: <small className="font-medium ml-1 text-lg">
                                                                {admin.user.city}
                                                            </small>
                                                        </span>
                                                    </p>
                                                    <p className="flex items-center mt-2">
                                                        <CallOutline
                                                            color={"#818CF8"}
                                                            height="30px"
                                                            width="30px"
                                                        />
                                                        <span className="font-semibold mt-2 ml-2">
                                                            Phone number: <small className="font-medium ml-1 text-lg text-indigo-700">
                                                                {admin.user.phoneNumber}
                                                            </small>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                    <div className="relative w-full xl:w-2/3 h-full mb-6 lg:mr-6">
                        <div className="relative w-full h-full">
                            {admin && admin.user.location.images.map((image, key) => (
                                <div className="popup__image" style={{ "display": popupImage ? "block" : "none" }} key={key}>
                                    <span
                                        className="close"
                                        onClick={togglePopupImage}
                                    >&times;</span>
                                    <img
                                        className="popup__image-content"
                                        src={image}
                                        alt="hotel-images"
                                    />
                                </div>
                            ))}
                            <div className="p-10 rounded-xl">
                                <div className="transform">
                                    <div
                                        className="bg-gray-100 h-auto rounded-2xl overflow-hidden shadow-lg mt-0"
                                    >
                                        {admin && (
                                            <div>
                                                <div className="relative">
                                                    <img
                                                        src={hotelSliders[index]}
                                                        alt="hotel-images"
                                                        className="w-full h-80 object-cover shadow-md transition hover:opacity-80 cursor-pointer"
                                                        onClick={togglePopupImage}
                                                    />
                                                </div>
                                                <div className="py-4 sm:px-2 md:px-10 lg:px-24">
                                                    <h1 className="my-4 font-sans text-center font-bold">
                                                        {admin.user.location.name}
                                                    </h1>
                                                    <p className="flex items-center">
                                                        <MailOutline
                                                            color={"#818CF8"}
                                                            height="30px"
                                                            width="30px"
                                                        />
                                                        <span className="font-semibold mt-2 ml-2">
                                                            Email: <small className="font-medium ml-1 text-lg text-indigo-700">
                                                                {admin.user.email}
                                                            </small>
                                                        </span>
                                                    </p>
                                                    <p className="flex items-center mt-2">
                                                        <HomeOutline
                                                            color={"#818CF8"}
                                                            height="30px"
                                                            width="30px"
                                                        />
                                                        <span className="font-semibold mt-2 ml-2 text-md">
                                                            Address: <small className="font-medium ml-1 text-lg text-indigo-700">
                                                                {admin.user.location.address}
                                                            </small>
                                                        </span>
                                                    </p>
                                                    <p className="flex items-center mt-2">
                                                        <BusinessOutline
                                                            color={"#818CF8"}
                                                            height="30px"
                                                            width="30px"
                                                        />
                                                        <span className="font-semibold mt-2 ml-2 text-md">
                                                            City: <small className="font-medium ml-1 text-lg text-indigo-700">
                                                                {admin.user.location.city.name}
                                                            </small>
                                                        </span>
                                                    </p>
                                                    <p className="flex items-center mt-2">
                                                        <CallOutline
                                                            color={"#818CF8"}
                                                            height="30px"
                                                            width="30px"
                                                        />
                                                        <span className="font-semibold mt-2 ml-2">
                                                            Phone number: <small className="font-medium ml-1 text-lg text-indigo-700">
                                                                {admin.user.location.contactPhoneNumber}
                                                            </small>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
