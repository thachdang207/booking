import React from "react";
import { LogoFacebook, LogoTwitter, LogoInstagram } from 'react-ionicons';

function Footer() {
    return (
        <footer className="bg-gray-100 flex flex-col items-center justify-center h-96 font-sans">
            <div className="flex flex-col">
                <div className="flex mb-20">
                    <div className="mr-20">
                        <div className="mb-3">
                            <h3 className="font-bold text-blue-800">
                                Vietnamese Booking
                            </h3>
                        </div>
                        <div className="flex justify-center">
                            <LogoFacebook
                                color={"#00000"}
                                width="30px"
                                height="30px"
                                cssClasses="mr-3"
                            />
                            <LogoTwitter
                                color={"#00000"}
                                width="30px"
                                height="30px"
                                cssClasses="mr-3"
                            />
                            <LogoInstagram
                                color={"#00000"}
                                width="30px"
                                height="30px"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mr-36">
                        <h3 className="font-bold text-blue-800 mb-3">Services</h3>
                        <h5>Lorem, ipsum dolor.</h5>
                        <h5>Lorem, ipsum dolor.</h5>
                        <h5>Lorem, ipsum dolor.</h5>
                    </div>
                    
                    <div className="flex flex-col mr-36">
                        <h3 className="font-bold text-blue-800 mb-3">Information</h3>
                        <h5>Event</h5>
                        <h5>Contact us</h5>
                        <h5>Privacy policy</h5>
                        <h5>Terms of services</h5>
                    </div>
                    
                    <div className="flex flex-col mr-36">
                        <h3 className="font-bold text-blue-800 mb-3">Address</h3>
                        <h5>54 Nguyen Luong Bang</h5>
                        <h5>Lien Chieu District</h5>
                        <h5>Danang City</h5>
                        <h5>vibo@gmail.com</h5>
                    </div>
                </div>
            </div>
                <div className="text-gray-900 text-xl font-extrabold">VIBO.com &copy; 2021</div>
        </footer>
    );
}

export default Footer;
