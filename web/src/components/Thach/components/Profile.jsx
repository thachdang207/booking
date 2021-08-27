import React, { useState, useCallback, useEffect } from "react";
import {
    MailOutline,
    CallOutline,
    BusinessOutline,
    HomeOutline,
    ArrowBackOutline,
    ArrowForwardOutline
} from "react-ionicons"
import "../../User/UserProfile/UserProfile.css"

function Profile({ admin }) {
    const [popupAvatarImage, setPopupAvatarImage] = useState(false);
    const togglePopupAvatarImage = () => setPopupAvatarImage(!popupAvatarImage)

    const [popupImage, setPopupImage] = useState(false);
    const togglePopupImage = () => setPopupImage(!popupImage)
    const [hotelSliders, setHotelSliders] = useState([
            "https://source.unsplash.com/random",
            "https://source.unsplash.com/random",
    ])

    useEffect(() => {
        if (admin.user) {
            setHotelSliders(admin.user.location.images);
        }
    }, [admin.user])

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
                            {admin.user && (
                                <div className="popup__image" style={{ "display": popupAvatarImage ? "block" : "none" }}>
                                    <span
                                        className="close"
                                        onClick={togglePopupAvatarImage}
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
                                        {admin.user && (
                                            <div>
                                                <div className="relative bg-indigo-200 flex p-3 justify-center items-center">
                                                    <img
                                                        src={
                                                            admin.user.avatar
                                                                ? admin.user.avatar
                                                                : "https://source.unsplash.com/random"
                                                        }
                                                        alt="avatar"
                                                        className="w-28 h-28 rounded-full object-cover shadow-md transition hover:opacity-80 cursor-pointer mr-3"
                                                        onClick={togglePopupAvatarImage}
                                                    />
                                                    <div className="my-4 text-3xl font-sans text-center font-bold">
                                                        {admin.user.fullName}
                                                    </div>
                                                </div>
                                                <div className="py-4 sm:px-2 md:px-8 xl:px-12">
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
                            <div className="popup__image" style={{ "display": popupImage ? "block" : "none" }}>
                                <span
                                    className="close"
                                    onClick={togglePopupImage}
                                >&times;</span>
                                <div className="absolute w-full h-full flex items-center justify-between px-10">
                                    <ArrowBackOutline
                                        cssClasses="z-10 cursor-pointer"
                                        color={"#f1f1f1"}
                                        width="40px"
                                        height="40px"
                                        onClick={handlePrevSlider}
                                    />
                                    <ArrowForwardOutline
                                        cssClasses="z-10 cursor-pointer"
                                        color={"#f1f1f1"}
                                        width="40px"
                                        height="40px"
                                        onClick={handleNextSlider}
                                    />
                                </div>
                                <img
                                    className="popup__image-content"
                                    src={hotelSliders[index]}
                                    alt="hotel-images"
                                />
                            </div>
                            <div className="p-10 rounded-xl">
                                <div className="transform">
                                    <div
                                        className="bg-gray-100 h-auto rounded-2xl overflow-hidden shadow-lg mt-0"
                                    >
                                        {admin.user && (
                                            <div>
                                                <div className="relative flex items-center justify-center p-3 bg-indigo-200">
                                                    <img
                                                        src={hotelSliders[index]}
                                                        alt="hotel-images"
                                                        className="w-28 h-28 rounded-full object-cover shadow-md transition hover:opacity-80 cursor-pointer mr-3
                                                        "
                                                        onClick={togglePopupImage}
                                                    />
                                                    <div className="my-4 text-3xl font-sans text-center font-semibold">
                                                        {admin.user.location.name}
                                                    </div>
                                                </div>
                                                <div className="py-4 sm:px-2 md:px-10 lg:px-24">

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
