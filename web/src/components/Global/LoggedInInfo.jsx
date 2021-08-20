import React, { Fragment } from 'react';
import { CaretDown, LogOutOutline, HeartOutline, ShareOutline, TicketOutline } from "react-ionicons"
import { Menu, Transition } from '@headlessui/react'
import { Link } from "react-router-dom"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function LoggedInInfo({ user: { id, fullName, avatar } }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center rounded-full border border-gray-300 shadow-sm p-2 bg-white text-sm font-medium text-gray-700 border-transparent focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <CaretDown />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to={`/user/${id}`}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex p-2 text-sm'
                                    )}
                                >
                                    <img
                                        src={avatar ? avatar : "https://source.unsplash.com/random"}
                                        alt="avatar"
                                        className="w-12 h-12 object-cover rounded-full mr-2" />
                                    <p className="font-semibold p-2">
                                        {fullName}
                                        <br />
                                        <span className="font-normal">
                                            See your profile
                                        </span>
                                    </p>
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to={`/user/${id}/bookings`}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex px-4 py-2 text-sm'
                                    )}
                                >
                                    <TicketOutline
                                        cssClasses="mr-3"
                                    />
                                    Booking histories
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex px-4 py-2 text-sm'
                                    )}
                                >
                                    <ShareOutline
                                        cssClasses="mr-3"
                                    />
                                    Share
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex px-4 py-2 text-sm'
                                    )}
                                >
                                    <HeartOutline
                                        cssClasses="mr-3"
                                    />
                                    Favorites
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="/logout"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex px-4 py-2 text-sm'
                                    )}
                                >
                                    <LogOutOutline cssClasses="mr-3" />
                                    Sign out
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default LoggedInInfo;