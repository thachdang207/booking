import React from "react";
import "./Global.css"

function Footer() {
    return (
        <footer className="relative footer-1 bg-gray-100 py-8 sm:py-12">
            <div className="container mx-auto px-4">
                <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                        <h5 className="text-xl text-indigo-700 font-bold mb-6">Features</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Many places</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Many features</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Fastest reservation</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Accepts many payment methods</p>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6">Resources</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Lorem, ipsum dolor.</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Lorem, ipsum.</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Lorem</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Lorem, ip</p>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <h5 className="text-xl font-bold mb-6">About</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Team</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Locations</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Privacy</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Terms</p>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <h5 className="text-xl font-bold mb-6">Help</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Support</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Help Center</p>
                            </li>
                            <li className="mb-2">
                                <p className="border-b border-solid border-transparent hover:border-indigo-800 hover:text-indigo-800">Contact Us</p>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                        <div className="flex sm:justify-center xl:justify-start">
                            <p className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-indigo-600 hover:border-indigo-600">
                                <i className="fa fa-facebook"></i>
                            </p>
                            <p className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-indigo-400 hover:border-indigo-400">
                                <i className="fa fa-twitter" ></i>
                            </p>
                            <p className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                                <i className="fa fa-google-plus" ></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
                    <div className="sm:w-full text-indigo-700 px-4 md:w-1/6">
                        <strong>VIBO</strong>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                        <h6 className="font-bold mb-2">Address</h6>
                        <address className="not-italic mb-4 text-sm">
                            Nguyen Luong Bang 54th St.<br />
                            Danang, Lien Chieu District.
                        </address>
                    </div>
                    <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                        <button
                            className="px-4 py-2 bg-indigo-800 hover:bg-indigo-900 rounded text-white"
                            onClick={() => window.scrollTo(0, 0)}
                        >Get Started</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
